/**
 * Namespace for Sorting Array assignment
 *
 * @namespace SortingArrays
 * @author thajo
 * @version 1.0.0
 */
var SortingArrays = (function() {
    "use strict";


    return {
        /**
         * Takes an Array and sort it in descending (fallande) order
         * @param {Array} data - The unsorted array
         * @throws {TypeError} Argument must be an array.
         * @throws {Error} Argument can not be an empty array.
         * @returns {Array} - The sorted array
         */
        sortDescending: function(data) {
          var copiedArray = data.slice();

          if(typeof data !== "object") {
            throw new TypeError("you didnt send in an object");
          }else if ( data.length < 1) {
            throw new Error("the array is empty!");
          }
          copiedArray.sort(function(a, b) {
              return b - a;
          });

          return copiedArray;
        },

        /**
         * Takes an Array and sort it in ascending (stigande) order
         * @param {Array} data - The unsorted array
         * @throws {TypeError} Argument must be an array.
         * @throws {Error} Argument can not be an empty array.
         * @returns {Array} - The sorted array
         */
        sortAscending: function(data) {
          var copiedArray = data.slice();

          if(typeof data !== "object") {
            throw new TypeError("you didnt send in an object");
          }else if ( data.length < 1) {
            throw new Error("the array is empty!");
          }

          copiedArray.sort(function(a, b) {
              return a - b;
          });

          return copiedArray;
        }
    };

}());

module.exports = SortingArrays;
