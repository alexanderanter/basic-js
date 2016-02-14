/**
 * Module for a simple value checker
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * Sends back a string with a message depending on what the parameters
 * data type.
 * See the tests at /test/part-1/check-values/ for more information how to respond
 * @param {*} value - The variable to exam
 * @returns {string} - A message that tells what the data type is (according to javascript).
 * See readme
 */
exports.check = function(value) {
    var startMessage = "You send me ";
    var typen;

    if(value && typeof value !== "object"){
      typen = typeof value;
      startMessage += "a " + typen;
    }else if (value === null){
      startMessage = "You send me null";
    }else if (value instanceof Array){
      startMessage += "an array";
    }else if (typeof value === "object"){
      startMessage += "an object";
    }else {
      startMessage += "an undefined value";
    }
    return startMessage;
};
