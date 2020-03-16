#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#include <Adafruit_Fingerprint.h>

char auth[] = "Xa2Q04vC1tQcl2W_M4y6pO5dDtY_j0XI";

// Configurando WiFi
char ssid[] = "NET virtua 305-2.4G";
char pass[] = "19829740";

SoftwareSerial mySerial(0, 3);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

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