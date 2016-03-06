/**
 * Module for reduce array
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * Takes an Array Numbers and returns the sum of all numbers in the array
 * @param {Array.<Number>} data An array with numbers
 * @returns {Number} The total sum of numbers in the array
 */
exports.getTotal = function(data) {
  var copiedArray = data.slice();
  var total = 0;

  if(copiedArray.length > 0){
    total = copiedArray.reduce(function(a, b) {
        return a + b;
    });
  }

  return total;
};
