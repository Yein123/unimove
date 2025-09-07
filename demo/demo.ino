// This code provides a basic implementation of our project.
// Note: Data interfacing with WebSocket or cloud platforms is not yet included in this version.
#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include <Adafruit_GFX.h>
#include <SPI.h>
#include <MFRC522.h>
#include "DHT.h"

// Pin Definitions
#define BTN_PLUS    26
#define BTN_MINUS   27
#define DHT_PIN     32
#define DHT_TYPE    DHT22
#define RAIN_PIN    34
#define ACS_PIN     35   

// RFID Pins
#define SS_PIN      17
#define RST_PIN     5   
#define SCK_PIN     18
#define MISO_PIN    19
#define MOSI_PIN    23

// OLED Pins (I2C default)
#define SDA_PIN     21
#define SCL_PIN     22

// Class Declarations
DHT dht(DHT_PIN, DHT_TYPE);
MFRC522 rfid(SS_PIN, RST_PIN);
Adafruit_SSD1306 display(128, 64, &Wire, -1);

// Variables
int pplCount = 0;
unsigned long lastDebounce = 0;
const int debounceDelay = 200; // ms

const float sensitivity = 0.185; // V/A for ACS712 5A version
const float Vref = 3.3;          // ESP32 ADC reference
const int ADCmax = 4095;

float readCurrent() {
  int adcValue = analogRead(ACS_PIN);
  float voltage = (adcValue * Vref) / ADCmax;
  float current = (voltage - (Vref / 2)) / sensitivity;
  return current;
}

void updateDisplay(String bus, float temp, float hum, bool raining, float current) {
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);

  display.setCursor(0, 0);
  display.println("Smart Campus Enhancement");

  display.setCursor(0, 12);
  display.print("Bus: ");
  display.println(bus);

  display.setCursor(0, 22);
  display.print("People: ");
  display.println(pplCount);

  display.setCursor(0, 32);
  display.print("Temp: ");
  display.print(temp);
  display.println(" C");

  display.setCursor(0, 42);
  display.print("Hum: ");
  display.print(hum);
  display.println(" %");

  display.setCursor(0, 52);
  display.print("Rain: ");
  display.println(raining ? "YES" : "NO");

  display.display();
}

void setup() {
  Serial.begin(115200);

  pinMode(BTN_PLUS, INPUT_PULLUP);
  pinMode(BTN_MINUS, INPUT_PULLUP);
  pinMode(RAIN_PIN, INPUT);

  dht.begin();

  // OLED init
  Wire.begin(SDA_PIN, SCL_PIN);
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("OLED not found!");
    for (;;);
  }
  display.clearDisplay();
  display.display();

  // RFID init
  SPI.begin(SCK_PIN, MISO_PIN, MOSI_PIN, SS_PIN);
  rfid.PCD_Init();

  Serial.println("System Ready: Smart Campus Enhancement");
}

void loop() {
  // Handle Button Inputs
  if (digitalRead(BTN_PLUS) == LOW && (millis() - lastDebounce > debounceDelay)) {
    pplCount++;
    lastDebounce = millis();
  }
  if (digitalRead(BTN_MINUS) == LOW && (millis() - lastDebounce > debounceDelay)) {
    if (pplCount > 0) pplCount--;
    lastDebounce = millis();
  }

  // Read Sensors
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  bool raining = digitalRead(RAIN_PIN) == LOW;
  float current = readCurrent();

  // RFID Check (Will be updated for further development)
  if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) {
    Serial.print("RFID Card UID: ");
    for (byte i = 0; i < rfid.uid.size; i++) {
      Serial.print(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
      Serial.print(rfid.uid.uidByte[i], HEX);
    }
    Serial.println();
    rfid.PICC_HaltA();
  }

  // Update OLED
  updateDisplay("Bus A", temp, hum, raining, current);

  delay(500);
}