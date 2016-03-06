/**
 * Module for overmean
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * This function takes an Array with objects in the form
 * {name: "Stina", points: 32}
 * Which is representing a score on a test. The functions work is to
 * calculate the mean (medelvärde) point and return an array with just the names
 * of those students that has higher or equal points to the mean point
 * @param {Array<object>} students
 * @returns {Array<string>}
 */
exports.overmean = function(students) {
  //copy the array
  var copiedArray = students.slice();
  var totalSum = 0;
  var result = [];
  var keys = Object.keys(students);
  var meanPoint = 0;
//Check the input
  if(!students || typeof students !== "object" || students.length < 1 ) {
      throw TypeError("TypeError");
  }
  //get the totalSum
  keys.forEach(function(key) {
    totalSum += copiedArray[key].points;
  });
  meanPoint = totalSum / keys.length;
  //pull the name for all student with higher than the mean point
  keys.forEach(function(key) {
    if(copiedArray[key].points >= meanPoint){
      result.push(copiedArray[key].name);
    }
  });

  return result;
};
