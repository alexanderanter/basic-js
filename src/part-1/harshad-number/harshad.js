/**
 * Namespace for Harshad numbers.
 *
 * @namespace Harshad
 * @author Mats Loock
 * @version 1.0.0
 */
var Harshad = (function() {
    "use strict";

    return {
        /**
         * Returns true when the given number is a valid Harshad number.
         *
         * @param {Number} number The given number.
         * @returns {Boolean}
         * @function Harshad.isValid
         */
        isValid: function(number) {

            var sum = 0;
            var num = number;
            var booResult;

            while(num > 0) {
              sum += num % 10;
              num = Math.floor(num / 10);
            }
            if(number % sum === 0){
              booResult = true;
            }else {
              booResult = false;
            }
            return booResult;
        },

        /**
         * Gets the next Harshad number after the given number.
         *
         * @param {Number} number The given number.
         * @returns {Number}
         * @function Harshad.getNext
         */
        getNext: function(number) {
            var validHarshad = false;
            var count = number;
            do {
              if(Harshad.isValid(count) === true){
                validHarshad = true;
                return count;
              }
              count++;
            } while (validHarshad === false);
        },

        /**
         * Returns a sequence of Harshad numbers, starting after a given number.
         *
         * @param {Number} count The number of consecutive Harshad numbers to return.
         * @param {Number} [start = 0] The number after which the sequence should start; defaults to 0.
         * @returns {Array.<Number>}
         * @function Harshad.getSequence
         */
        getSequence: function(count, start) {
            var harshSeq = [];
            if(!start) {
              start = 0;
            }
            //find the next harshad until the array got enough number as passed in into the count parameter
            do {
              start++; //avoid to validate the actual starting number by increment in the beginning of the loop
              start = Harshad.getNext(start);
              harshSeq.push(start);
            } while (harshSeq.length < count);

            return harshSeq;
        }
    };
}());

module.exports = Harshad;
