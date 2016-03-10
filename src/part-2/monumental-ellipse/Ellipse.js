/**
 * Module for the type Ellipse.
 *
 * @author: alexanderanter
 * @version 1.0.0
 */

"use strict";

function Ellipse(a, b) {
        var _a;
        var _b;
        Object.defineProperty(this, "a", {
            get: function() {
              return _a;
            },
            set: function() {
              if(a < 0){
                throw new Error("a must be equal or higher than 0");
              } else {
                _a = a;
              }
            }
        });
        Object.defineProperty(this, "b", {
            get: function() {
              return _b;
            },
            set: function() {
              if(a < 0) {
                throw new Error("b must be equal or higher than 0");
              } else {
                _b = b;
              }
            }
        });
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
