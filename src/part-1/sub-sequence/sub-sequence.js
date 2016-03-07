/**
 * Module for sub sequence
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * Returns true if sub is a sequence (or identical) to arr otherwise return false
 * @param {Array.<Number>} arr - Array with unordered integers
 * @param {Array.<Number>} sub - Array with unordered integers
 * @returns {boolean}
 */
exports.isSequence = function(arr, sub) {
    var firstArray = arr.slice();
    var secondArray = sub.slice();

    var validResult = false;
    var slicedPiece;

    var startingPoint = 0;
    var alreadyFoundAt;
    firstArray.forEach(function(key) {
        if (key === secondArray[0]) {

            if (!alreadyFoundAt) {
              startingPoint = firstArray.indexOf(key);
            } else {
              startingPoint = firstArray.indexOf(key, (alreadyFoundAt +1));
            }

            alreadyFoundAt = startingPoint;
            slicedPiece = firstArray.slice( startingPoint,(startingPoint + secondArray.length));
            if (slicedPiece.length === secondArray.length) {
              for (var i = 0; i < secondArray.length; i++) {
                if (slicedPiece[i] === secondArray[i]) {
                  validResult = true;
                } else {
                  validResult = false;
                }
              }
            }
        }
    });
    return validResult;
};
