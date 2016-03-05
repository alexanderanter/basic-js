/**
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

var helper = require("./helper");

/**
 * The function gets a string which is initials of a suspect.
 * This function finds the gangster having this initials and returns
 * the first name found. If no suspect is found the string "No suspect found!"
 * will be returned. The function will call helper functions
 * getNext() and getInitials(name) from a other module.
 * getNext() gives a string with a suspects name to compare
 * and getInitials(name) will take a name and return the initials of that name it will
 * complain with the Error "gotInitials got an empty string!" if an empty string is provided
 * @param initials
 * @returns {*}
 */
exports.getGangster = function(initials) {
    // Only change code in this function to get the tests to work

    var theSuspect = helper.getNext();
    while (theSuspect !== "") {
      var initialsOfTheName = helper.getInitials(theSuspect);
      if (initials === initialsOfTheName) {
        return theSuspect;
      }
      theSuspect = helper.getNext();
    }
    return "No suspect found!";
};
