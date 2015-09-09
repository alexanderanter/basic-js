/**
 * Namespace for Sorting Teams assignment
 *
 * @namespace SortingTeams
 * @author thajo
 * @version 1.0.0
 */
var SortingTeams = (function() {
    "use strict";

    var path = require("path");
    var fileSystem = require("fs");

    return {
        /**
         * Read data from a json-file.
         * @returns { Array.<{name: String, nickname: String, points: Number}> }
         */
        readTeamsFromFile: function() {
            // DO NOT CHANGE
            return JSON.parse(fileSystem.readFileSync(path.join(__dirname, "teams.json")));
        },

        /**
         * Call readTeamsFromFile to get the array with objects
         * Sorts the teams in the array according to points. Highest points first
         * Returns the sorted array
         * @returns { Array.<{name: String, nickname: String, points: Number}> }
         */
        sortTeams: function() {

            // TODO: Write your code here!
        }

    };
}());

module.exports = SortingTeams;
