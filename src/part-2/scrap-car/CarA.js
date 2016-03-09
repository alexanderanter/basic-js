/**
 * Module for the type CarA.
 *
 * @author : alexaneranter
 * @version 1.0.0
 */

"use strict";

function CarA(name) {
  this.petName = name || "Skrotbilen";
  this.speed = this.speed || 0;
}
CarA.prototype.accelerate = function(changeSpeed) {
  var result = "";
  var finalSpeed = 0;
  if(changeSpeed && typeof changeSpeed === "number") {
    finalSpeed = this.speed + changeSpeed;
  } else {
    finalSpeed = this.speed;
  }

  if (changeSpeed > 0){
    result = this.petName + "s hastighet ökar från " + this.speed + " km/h till " + finalSpeed + " km/h.";
    this.speed = finalSpeed;
  }else if (changeSpeed < 0) {
    result = this.petName + "s hastighet minskar från " + this.speed + " km/h till " + finalSpeed + " km/h." ;
    this.speed = finalSpeed;
  }else {
    result = this.petName + "s hastighet är oförändrad!";
  }
  return result;
};
CarA.prototype.turnLeft = function() {
  //car turn left in Swedish
  return this.petName + " svänger vänster.";
};
CarA.prototype.turnRight = function() {

  //car turn right in Swedish
  return this.petName + " svänger höger.";
};
CarA.prototype.start = function() {

  return this.petName + " startar.";
};
CarA.prototype.stop = function() {

  return this.petName + " stannar.";
};
// Exports
module.exports = CarA;
