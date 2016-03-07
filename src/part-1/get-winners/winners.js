"use strict";

var GetWinners = (function() {

    return {
        /**
         * Analyze the array with names and returns an object where the frequency of the name is showing
         * @param {Array.<String>} data
         * @returns {Object.{ String: Number }} - The object as example: {'mats': 1, 'john': 3}
         */
        getFrequencyInArray: function(data) {
            // TODO: Your code here - start here
        },

        /**
         * Takes an object with names and values and returns the name(s) with highest value
         * @param {Object.{key: value}} frequency
         * @returns {Array.<String>}
         */
        getHighestValuesInFrequency: function(frequency) {

            // TODO: Your code here
        },

        /**
         * Sorts an array with strings in descending order
         * @param {Array.<String> data
         * @returns {Array.<String>}
         */
        sortStringsAscending: function(data) {

            // TODO: Your code here

        },

        /**
         * Analyze the array and returns an array with the name (in lowercase) that is most
         * frequent. The returned array may contain one or more users and should be sorted in
         * descending order
         * @param {Array.<String>} data
         */
        getWinners: function(data) {
            // This is sealed - should not be changed
            var sortedKeys;
            var frequency;
            frequency = GetWinners.getFrequencyInArray(data);
            sortedKeys = GetWinners.getHighestValuesInFrequency(frequency);
            return GetWinners.sortStringsAscending(sortedKeys);
        }
    };
})();

module.exports = GetWinners;
