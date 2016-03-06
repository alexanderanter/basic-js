/**
 * Namespace for Sorting Teams assignment
 *
 * @namespace SortingTeams
 * @author thajo
 * @version 1.0.0
 */
var SortingTeams = (function() {
    "use strict";

    // let node.js help us with reading from filesystem
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

            var fileContent = SortingTeams.readTeamsFromFile();
            var copiedArray = fileContent.teams;
            //sorting the array with the highest value at top
            copiedArray.sort(function (a, b) {
              if (a.points > b.points) {
                  return -1;
              }
              if (a.points < b.points) {
                return 1;
              }
              // a must be equal to b
              return 0;
            });

            return copiedArray;
        }

    };
}());

module.exports = SortingTeams;
