/**
 * Module for the type CarA.
 *
 * @author : alexaneranter
 * @version 1.0.0
 */

"use strict";

function CarA(name, speed) {
  this.petName = name || "Skrotbilen";
  this.speed = (this.speed + speed) || 0;
}
CarA.prototype.accelerate = function() {
  var result = "";
  if (this.speed > 0){
    result = ""
  }else if (this.speed < 0) {

  }else {

  }
  return result;
};
CarA.prototype.turnLeft = function() {
  //car turn left in Swedish
  return "Skrotbilen svänger vänster.";
};
CarA.prototype.turnRight = function() {

  //car turn right in Swedish
  return "Skrotbilen svänger höger.";
};
CarA.prototype.start = function() {

  return "Skrotbilen startar.";
};
CarA.prototype.stop = function() {

  return "Skrotbilen stannar.";
};
// Exports
module.exports = CarA;
