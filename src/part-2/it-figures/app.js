/**
 * Starting point of the application.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";
var Shape = require("./Shape");
var Ellipse = Shape.Ellipse;
var Rectangle = Shape.Rectangle;

var ellipse = new Ellipse(8, 15.2);
console.log("=== Ellips ===");
console.log("area:    " + ellipse.area());
console.log("omkrets: " + ellipse.circumference());
console.log(ellipse.toString());

var rectangle = new Rectangle(63, 18.4);
console.log("\n=== Rektangel ===");
console.log("area:    " + rectangle.area());
console.log("omkrets: " + rectangle.circumference());
console.log(rectangle.toString());
