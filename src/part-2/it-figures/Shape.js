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
    console.log(this.length + this.height);
};

function Ellipse(length, height) {
    Shape.call(this, length, height); // this = Ellipse, by using call we can control that this will be this this
}

Ellipse.prototype = Object.create(Shape.prototype);
Ellipse.prototype.constructor = Ellipse;

Ellipse.prototype.area = function() {

};

Ellipse.prototype.circumference = function() {

};

function Rectangle(length, height) {
    Shape.call(this, length, height); // this = Ellipse, by using call we can control that this will be this this
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {

};

Rectangle.prototype.circumference = function() {

};

// Exports
module.exports = Shape;
module.exports.Ellipse = Ellipse;
module.exports.Rectangle = Rectangle;
