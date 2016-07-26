#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

#define PIN 6

#define WAIT 100

#define RED strip.Color(255, 0, 0)
#define GREEN strip.Color(0, 255, 0)
#define BLUE strip.Color(0, 0, 255)

#define YELLOW strip.Color(255, 255, 0)
#define MAGENTA strip.Color(255, 0, 255)
#define CYAN strip.Color(0, 255, 255)

#define ORANGE strip.Color(255, 140, 0)
#define PINK strip.Color(255, 0, 140)
#define LIME strip.Color(140, 255, 0)

#define LIGHT_GREEN strip.Color(0, 255, 140)
#define LIGHT_BLUE strip.Color(0, 140, 255)
#define LIGHT_PURPLE strip.Color(140, 0, 255)

Adafruit_NeoPixel strip = Adafruit_NeoPixel(60, PIN, NEO_GRB + NEO_KHZ800);

// IMPORTANT: To reduce NeoPixel burnout risk, add 1000 uF capacitor across
// pixel power leads, add 300 - 500 Ohm resistor on first pixel's data input
// and minimize distance between Arduino and first pixel.  Avoid connecting
// on a live circuit...if you must, connect GND first.

void setup() {
  // This is for Trinket 5V 16MHz, you can remove these three lines if you are not using a Trinket
  #if defined (__AVR_ATtiny85__)
    if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
  #endif
  // End of trinket special code

  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
}

void loop() {
  uint32_t colorCombinations [2][2] = {
    {RED, GREEN},
    {BLUE, YELLOW},
//    {MAGENTA, CYAN},
//    {ORANGE, PINK},
//    {LIME, LIGHT_BLUE},
//    {LIGHT_PURPLE, LIGHT_GREEN}
  };
  
  for (int i = 0; colorCombinations[i] != 0; i++) {
    movingSections(WAIT, colorCombinations[i][0], colorCombinations[i][1]);
    delay(WAIT);
  }

  
  colorWipe(strip.Color(0, 0, 0));
  strip.show();
}

void movingSections(int wait, uint32_t firstColor, uint32_t secondColor) {
  for (int j = 0; j < 6; j++) {
    for (int i = 0; i < strip.numPixels() / 6; i++) {
      strip.setPixelColor(i * 6 + j, firstColor);
    }

    delay(wait);

    strip.show();
  }

  for (int j = 5; j >= 0; j--) {
    for (int i = strip.numPixels() / 6; i >= 0; i--) {
      strip.setPixelColor(i * 6 + j, secondColor);
    }

    delay(wait);

    strip.show();
  }
}

void colorWipe(uint32_t color) {
  for(uint16_t i=0; i<strip.numPixels(); i++) {
    strip.setPixelColor(i, color);
  }

  strip.show();
}
