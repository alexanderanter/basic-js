/**
 * Module for a simple calculator
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

exports.add = function() {
      var finalResult = 0;
      var theArgument;
      for (var i=0; i<arguments.length; i++){
        theArgument = arguments[i];
        //replaceing , with . for nunmber conversion
        if(typeof theArgument === "string"){
          theArgument = theArgument.replace(/,/g, '.');
        }
        //converting string to numbers
        theArgument = Number(theArgument);
        //checks that its a number and not a boolean
        if(isNaN(theArgument) === false && typeof arguments[i] !== "boolean") {
          finalResult += theArgument;
        }else {
          finalResult = "error";
          break;
        }
      }
    return finalResult;
};
