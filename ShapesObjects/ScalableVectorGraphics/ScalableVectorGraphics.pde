/**
 * <p>Ketai Sensor Library for Android: http://ketai.org</p>
 *
 * <p>KetaiSensor Features:
 * <ul>
 * <li>handles incoming Sensor Events</li>
 * <li>Includes Accelerometer, Magnetometer, Gyroscope, GPS, Light, Proximity</li>
 * </ul>
 * <p>Updated: 2011-11-25 Daniel Sauter/Jesus Duran</p>
 */

import ketai.ui.*;
import android.view.MotionEvent;

KetaiGesture gesture;

PShape us;  // 1
float scaleFactor = 3;

void setup() {
  orientation(LANDSCAPE);
  gesture = new KetaiGesture(this);  // 2

  us = loadShape("Blank_US_map_borders.svg");  // 3
  shapeMode(CENTER);  // 4
}

void draw() {
  background(128);

  translate(width/2, height/2);
  scale(scaleFactor);  // 5
  shape(us);  // 6
}

void onPinch(float x, float y, float d)
{
  scaleFactor += d/100;  // 7
  scaleFactor = constrain(scaleFactor, 1, 10);    // 8
}

public boolean surfaceTouchEvent(MotionEvent event) {
  super.surfaceTouchEvent(event);
  return gesture.surfaceTouchEvent(event);
}
