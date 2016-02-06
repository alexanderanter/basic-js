/**
 * Module for a couple of simple programming tasks
 *
 * @author leitet
 * @version 1.0.0
 */

"use strict";


/*
* The tasks in this assignment will use the following javascript functions:
*
* Math.ceil (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
* Math.round (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
* Math.floor (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
* String.length (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
* String.charAt (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
* String.indexOf (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
*
* Make sure you study the functions as you will (might) need them in your code.
*
* */


/**
 * Rounds the Number "number" up. E.g. 12.4 should return 13
 * @param {Number} number - A number e.g.: 12.4.
 * @returns {Number} The parameter number rounded up.
 */
exports.roundUp = function(number) {

    var roundedNumber;

    // Your code here - change the code under to make the test go green
    // The variable "number" is a number. This number should be rounded up. E.g. 15.2 should return 16.
    // You could try to stop the debugger at the return-line to investigate the number.
    // Your task is to populate roundedNumber with the rounded number.
    roundedNumber = Math.ceil(number);
    return roundedNumber;
};

/**
 * Rounds the Number "number" down. E.g. 12.7 should return 12
 * @param {Number} number - A number e.g.: 12.7.
 * @returns {Number} The parameter number rounded down.
 */
exports.roundDown = function(number) {

    var roundedNumber;

    // Your code here - change the code under to make the test go green
    // The variable "number" is a number. This number should be rounded down. E.g. 15.9 should return 15.
    // Your task is to populate roundedNumber with the rounded number.
    roundedNumber = Math.floor(number);
    return roundedNumber;
};

/**
 * Rounds the Number "number" in an ordinary way. E.g. 12.5 should return 13 and 12.4 should return 12
 * @param {Number} number - A number e.g.: 12.7.
 * @returns {Number} The parameter number rounded.
 */
exports.round = function(number) {

    var roundedNumber;

    // Your code here - change the code under to make the test go green
    // The variable "number" is a number. This number should be rounded. E.g. 15.9 should return 16. and 15.4 should return 15.
    // Your task is to populate roundedNumber with the rounded number.
    roundedNumber = Math.round(number);
    return roundedNumber;
};

/**
 * Returns the lenght of the string. "Hello" should return 5
 * @param {String} str
 * @returns {Number} The length of the string str
 */
exports.getStringLength = function(str) {

    // The variable "str" is a string. Your task is to return the length of the string. E.g. "Det blauser hä i Kamar" should return the number 22

    return str.length;
};

/**
 * Always return the first letter of the string
 * @param {String} str
 * @returns {String} The first letter in the String str
 */
exports.getFirstLetter = function(str) {
    return str.charAt(0);
};

/**
 * Get the position (first letter is 0) of the question mark in the string. E.g. "Is it OK?" should return 8
 * @param {String} str
 * @returns {Number} The position of the question mark in the string.
 */
exports.getPositionOfQuestionMark = function(str) {
    return str.indexOf("?");
};

/**
 * Test if str1 equals str2
 * @param {String} str1
 * @param {String} str2
 * @returns {Boolean} true if str1 equals str2 and false if they are not equal
 */
exports.isEqual = function(str1, str2) {
    if (str1 === str2) {
        return true;
    }   else {
        return false;
    }
};

/**
 * Test if number is odd
 * @param {Number} number
 * @returns {Boolean} true if number is odd, false if it is even.
 */
exports.isOdd = function(number) {
    if (number % 2 === 0) {
        return false;
    } else {
        return true;
    }
};

/**
 * Test if number is even
 * @param {Number} number
 * @returns {Boolean} true if number is even, false if it is odd.
 */
exports.isEven = function(number) {
    if (number % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

/*
*  Well done! Now you are ready for Tiny Tunes!
*
* */
