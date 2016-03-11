/**
 * Module for the type Ellipse.
 *
 * @author: alexanderanter
 * @version 1.0.0
 */

"use strict";

function Ellipse(a, b) {
    Object.defineProperty(this, "a",
    {
     get: function(){
       return a;
     },
     set: function(value) {
       var floatVal = parseFloat(value);
       if (isNaN(floatVal) || floatVal < 0){
          throw new Error("postalCode seems to beinvalid!");
       }
       a = floatVal;
     }
    });
    Object.defineProperty(this, "b",
    {
     get: function(){
       return b;
     },
     set: function(value) {
       var floatVal = parseFloat(value);
       if (isNaN(floatVal) || floatVal < 0){
          throw new Error("postalCode seems to beinvalid!");
       }
       b = floatVal;
     }
    });
  this.a = a;
  this.b = b;
}

Ellipse.prototype.area = function() {
    return Math.PI * this.a * this.b;
};
Ellipse.prototype.circumference = function() {
    return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b);
};
Ellipse.prototype.toString = function() {
  return "{ a: " + this.a + ", b: " + this.b + ", area: " + this.area().toFixed(1) + ", circumference: " + this.circumference().toFixed(1) + " }";
};

// Exports
module.exports = Ellipse;
