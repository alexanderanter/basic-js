/**
 * Module for a simple calculator
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

exports.add = function() {
      var finalResult = 0;
      var test;
      for (var i=0; i<arguments.length; i++){

        var theNumber =  Number(arguments[i]);
        
        if(isNaN(theNumber) == false && typeof arguments[i] !== "boolean") {
          arguments[i] = Number(arguments[i]);
          finalResult += arguments[i];
        }else {
          finalResult = "error";
          break;
        }
      }

    return finalResult;
};
