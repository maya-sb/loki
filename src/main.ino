#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

char auth[] = "Xa2Q04vC1tQcl2W_M4y6pO5dDtY_j0XI";

// Configurar WiFi
char ssid[] = "ssid";
char pass[] = "pass";

void setup() {

  // Configurando motor
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);


  Serial.begin(9600);
  Blynk.begin(auth, ssid, pass);
}

void loop() {
  Blynk.run();
}