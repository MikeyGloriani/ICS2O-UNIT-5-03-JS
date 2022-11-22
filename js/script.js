// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-03-JS/sw.js", {
    scope: "/ICS2O-UNIT-5-03-JS/",
  })
}

/**
 * This function updates the slider value.
 */
 function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  // process
  if (valueFromSlider >= 17) {
    document.getElementById("answer").innerHTML =
      "You can watch an R-rated movie" 
  }

  // process
  else if (valueFromSlider >= 13) {
    document.getElementById("answer").innerHTML =
      "You can watch a PG-13 movie" 
  }
   // process
   else if (valueFromSlider >= 5) {
    document.getElementById("answer").innerHTML =
      "You can watch a G-rated movie" 
  }

    // process
    else {
      document.getElementById("answer").innerHTML =
        "You are too young" 
    }
}
