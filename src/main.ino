#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#include <Adafruit_Fingerprint.h>
#include <FirebaseESP8266.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

// Configurando WiFi
#define WIFI_SSID "NET virtua 305-2.4G"
#define WIFI_PASSWORD "19829740"

FirebaseData firebaseData;

SoftwareSerial mySerial(0, 3);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

int id;


//cadastro
int cadastrar;
String nomeCad;
String idCad;

uint16_t hours;
uint16_t minutes;
uint16_t hoursNow;
uint16_t minutesNow;
String timestamps;
uint16_t paraComparar;
bool atrasado;
String nome;
String pushId;

// uteis
uint16_t batidosHoje;
uint16_t quantidade;
uint16_t compare;

void setup() {

  Serial.begin(9600);
  
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  
  Firebase.begin("late-34a1d.firebaseio.com", "DfpRoYHUMwxkG9chCx1lW31MeYzzibMa3UxGb1LP");

  if (Firebase.getInt(firebaseData, "/quantidade")) {
    if (firebaseData.dataType() == "int") {
      quantidade = firebaseData.intData();
    }
  } else {
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.getInt(firebaseData, "/batidosHoje")) {
    if (firebaseData.dataType() == "int") {
      batidosHoje = firebaseData.intData();
    }
  } else {
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.getInt(firebaseData, "/compare")) {
    if (firebaseData.dataType() == "int") {
      compare = firebaseData.intData();
    }
  } else {
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.getInt(firebaseData, "/horas")) {
    if (firebaseData.dataType() == "int") {
      hours = firebaseData.intData();
    }
  } else {
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.getInt(firebaseData, "/minutos")) {
    if (firebaseData.dataType() == "int") {
      minutes = firebaseData.intData();
    }
  } else {
    Serial.println(firebaseData.errorReason());
  }
  
  timeClient.begin();

  // Sensor de impressão digital
  finger.begin(57600);

  if (finger.verifyPassword()) {
    Serial.println("Sensor encontrado");
  } else {
    Serial.println("Sensor não encontrado");
    while (1) { delay(1); }
  }

  pinMode(2, OUTPUT);
  digitalWrite(2, HIGH);

}

void loop() {
  fingerprint();
  timeClient.update();
  if (Firebase.getInt(firebaseData, "/cadastrar")) {
      if (firebaseData.dataType() == "int") {
        cadastrar = firebaseData.intData();
        if (cadastrar != 0){
           Serial.println(cadastrar);
           id = cadastrar;
           cadastrarFingerprint();
           cadastrar = 0;
           Firebase.setInt(firebaseData, "/cadastrar", cadastrar);
        }
      }
    } else {
      Serial.println(firebaseData.errorReason());
    }
}

uint8_t cadastrarFingerprint(){

  int p = -1;
  Serial.print("Coloque seu dedo para iniciar o cadastro.");
  digitalWrite(2, LOW);
  //delay(2000);

  while (p != FINGERPRINT_OK) {
    p = finger.getImage();
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Imagem guardada");
      break;

    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro de comunicação");
      break;

    case FINGERPRINT_IMAGEFAIL:
      Serial.println("Erro na imagem");
      break;
    
    case FINGERPRINT_NOFINGER:
      break;

    default:
      Serial.println("Erro desconhecido");
      break;
    }
  }

  //Successo
  p = finger.image2Tz(1);
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Imagem convertida");
      break;

    case FINGERPRINT_IMAGEMESS:
      Serial.println("Imagem ruim");
      return p;

    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro de comunicação");
      return p;

    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Não foi possível encontrar os recursos de impressão digital");
      return p;

    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Não foi possível encontrar os recursos de impressão digital");
      return p;

    default:
      Serial.println("Erro desconhecido");
      return p;
  }

  Serial.println("Remova seu dedo");
  digitalWrite(2, HIGH);
  
  delay(2000);
  p = 0;
  while (p != FINGERPRINT_NOFINGER) {
    p = finger.getImage();
  }
  Serial.print("ID"); Serial.println(id);
  
  p = -1;
  Serial.println("Coloque o seu dedo novamente");
  digitalWrite(2, LOW);
    
  while (p != FINGERPRINT_OK) {
    p = finger.getImage();
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image guardada");
      break;

    case FINGERPRINT_NOFINGER:
      break;

    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro de comunicação");
      break;

    case FINGERPRINT_IMAGEFAIL:
      Serial.println("Erro na imagem");
      break;

    default:
      Serial.println("Erro desconhecido");
      break;
    }
  }

  //Successo
  p = finger.image2Tz(2);
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image convertida");
      break;

    case FINGERPRINT_IMAGEMESS:
      Serial.println("Image ruim");
      return p;

    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro de comunicação");
      return p;

    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Não foi possível encontrar os recursos de impressão digital");
      return p;

    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Não foi possível encontrar os recursos de impressão digital");
      return p;

    default:
      Serial.println("Erro desconhecido");
      return p;
  }

  // Convertida!
  Serial.print("Criando modelo para #");  
  Serial.println(id);
  
  p = finger.createModel();
  if (p == FINGERPRINT_OK) {
    Serial.println("Tudo certo! As impressões são iguais.");

  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Erro de comunicação");
    return p;

  } else if (p == FINGERPRINT_ENROLLMISMATCH) {
    Serial.println("Erro! As impressões não são iguais.");
    return p;

  } else {
    Serial.println("Erro desconhecido");
    return p;
  }
  
  Serial.print("ID"); Serial.println(id);
  
  p = finger.storeModel(id);
  if (p == FINGERPRINT_OK) {
    Serial.println("Impressão digital cadastrada!");
    digitalWrite(2, HIGH);
    delay(2000);
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Erro de comunicação");
    return p;

  } else if (p == FINGERPRINT_BADLOCATION) {
    Serial.println("Não foi possível salvar");
    return p;

  } else if (p == FINGERPRINT_FLASHERR) {
    Serial.println("Erro ao escrever na flash");
    return p;

  } else {
    Serial.println("Erro desconhecido");
    return p;
  }   
}

uint8_t getFingerprintID() {
  uint8_t p = finger.getImage();
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image tirada!");
      break;
    case FINGERPRINT_NOFINGER:
      Serial.println("Nenhum dedo encontrado.");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro de comunicação.");
      return p;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println("Erro na hora de captar a imagem.");
      return p;
    default:
      Serial.println("Erro desconhecido");
      return p;
  }

  // OK success!
  p = finger.image2Tz();
  switch (p) {
    case FINGERPRINT_IMAGEMESS:
      Serial.println("Imagem muito ruim.");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro de comunicação");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Não foi possível encontrar os recursos de impressão digital");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Não foi possível encontrar os recursos de impressão digital");
      return p;
    default:
      Serial.println("Erro desconhecido");
      return p;
  }
  
  // OK converted!
  p = finger.fingerFastSearch();
  if (p == FINGERPRINT_OK) {
    Serial.println("Impressão digital reconhecida!");
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Erro de comunicação");
    return p;
  } else if (p == FINGERPRINT_NOTFOUND) {
    Serial.println("Impressão digital não reconhecida!");
    return p;
  } else {
    Serial.println("Erro desconhecido");
    return p;
  }   
  
  // found a match!
  Serial.print("Impressão digital reconhecida!");

  return finger.fingerID;
}

// returns -1 if failed, otherwise returns ID #
int fingerprint() {
  uint8_t p = finger.getImage();
  if (p != FINGERPRINT_OK)  return -1;

  p = finger.image2Tz();
  if (p != FINGERPRINT_OK)  return -1;

  p = finger.fingerFastSearch();
  if (p != FINGERPRINT_OK)  return -1;
  
  // found a match!
  Serial.print("Impressão digital reconhecida! #"); Serial.println(finger.fingerID);

  digitalWrite(2, LOW);
  delay(2000);
  digitalWrite(2, HIGH);

   // Se atrasou?
  hoursNow =  String(timeClient.getHours()).toInt();
  minutesNow = String(timeClient.getMinutes()).toInt();;
  timestamps = String(timeClient.getEpochTime());

  if (Firebase.getInt(firebaseData, "/users/" + String(finger.fingerID) + "/paraComparar")) {
    if (firebaseData.dataType() == "int") {
      paraComparar = firebaseData.intData();
      Serial.println(firebaseData.intData());
    }
  } else {
    Serial.println(firebaseData.errorReason());
  }


  if (paraComparar != compare) {

    if(hoursNow < hours) {
      atrasado = false;
    } else if (hoursNow == hours){
      if(minutesNow <= minutes) {
        atrasado = false;
      } else {
        atrasado = true;
      }
    } else {
      atrasado = true;
    }
    
    // Send to db
    if(Firebase.setInt(firebaseData, "/users/" + String(finger.fingerID) + "/paraComparar", compare) ) {
      Serial.println("pronto");
    }

    batidosHoje++;
    if(Firebase.setInt(firebaseData, "/batidosHoje", batidosHoje) ) {
      Serial.println("pronto");
    }
    
    if(Firebase.setBool(firebaseData, "/pontos/" + String(finger.fingerID) + "-" + timestamps + "/atrasado", atrasado )) {
      Serial.println("pronto");
    } else {
      Serial.println("erro");
    }

    if(Firebase.setString(firebaseData, "/pontos/" + String(finger.fingerID) + "-" + timestamps + "/id", String(finger.fingerID) )) {
      Serial.println("pronto");
    } else {
      Serial.println("erro");
    }

    if(Firebase.setInt(firebaseData, "/pontos/" + String(finger.fingerID) + "-" + timestamps + "/timestamp", timestamps.toInt() )) {
      Serial.println("pronto");
    } else {
      Serial.println("erro");
    }

    if (Firebase.getString(firebaseData, "/users/" + String(finger.fingerID) + "/nome")) {
      if (firebaseData.dataType() == "string") {
        nome = firebaseData.stringData();
      }
    } else {
      Serial.println(firebaseData.errorReason());
    }
    
    Firebase.setString(firebaseData, "/pontos/" + String(finger.fingerID) + "-" + timestamps + "/nome", nome);

    // Reiniciar contagens
    if(batidosHoje == quantidade) {
      Firebase.setInt(firebaseData, "/compare", !compare);
      Firebase.setInt(firebaseData, "/batidosHoje", 0);
    }

  ;}
  
  return finger.fingerID; 
}