#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#include <Adafruit_Fingerprint.h>

char auth[] = "Xa2Q04vC1tQcl2W_M4y6pO5dDtY_j0XI";

// Configurando WiFi
char ssid[] = "NET virtua 305-2.4G";
char pass[] = "19829740";

SoftwareSerial mySerial(0, 3);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

int id = 1;

void setup() {

  // Configurando motor
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);

  digitalWrite(4, HIGH);
  digitalWrite(5, HIGH);

  Serial.begin(9600);
  Blynk.begin(auth, ssid, pass);

  // Sensor de impressão digital
  finger.begin(57600);

  if (finger.verifyPassword()) {
    Serial.println("Sensor encontrado");
  } else {
    Serial.println("Sensor não encontrado");
    while (1) { delay(1); }
  }
}

void loop() {
  Blynk.run();
}

uint8_t cadastrarFingerprint(){

  int p = -1;
  Serial.print("Coloque seu dedo para iniciar o cadastro.");

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
  
  delay(2000);
  p = 0;
  while (p != FINGERPRINT_NOFINGER) {
    p = finger.getImage();
  }
  Serial.print("ID"); Serial.println(id);
  
  p = -1;
  Serial.println("Coloque o seu dedo novamente");

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

BLYNK_WRITE(V2){

  while (!cadastrarFingerprint());
  Blynk.virtualWrite(V2, 0);
   
}