/**
 * Module for shapes.
 *
 * @author : alexanderanter
 * @version 1.0.0
 */

"use strict";

function Shape(length, height) {
    this.length = length;
    this.height = height;
}

Shape.prototype.toString = function() {
    var result;
    result = "längd: " + this.length + ", höjd: " + this.height + ", omkrets" + this.circumference + ", area: " + this.area;
    return result;
};

function Ellipse(length, height) {
    Shape.call(this, length, height); // this = Ellipse, by using call we can control that this will be this this
}

Ellipse.prototype = Object.create(Shape.prototype);
Ellipse.prototype.constructor = Ellipse;

Ellipse.prototype.area = function() {
    var b = Math.PI * (this.length / 2) * (this.height / 2);
    return b;
};

Ellipse.prototype.circumference = function() {
    return Math.PI * Math.sqrt(this.length * this.length / 2 + this.height * this.height / 2);
};

function Rectangle(length, height) {
    Shape.call(this, length, height); // this = Ellipse, by using call we can control that this will be this this
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
    return this.length * this.height;
};

Rectangle.prototype.circumference = function() {

    return 2 * this.length * this.height;
};

// Exports
module.exports = Shape;
module.exports.Ellipse = Ellipse;
module.exports.Rectangle = Rectangle;
