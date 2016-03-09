"use strict";

/**
 * Lego builder part1 challenge
 *
 * @author Johan Leitet
 * @version 1.0.0
 */

/**
 * Solution by:
 * @author alexanderanter
 */

/**
 * Returns a new object
 *
 * @param {Number} x Number horisontal knobs on the lego brick default 2
 * @param {Number} y Number vertical knobs on the lego brick default 4
 * @param {Number} z Hight of the lego brick default 2
 * @param {String} color Color of the lego brick ("blue", "red", "green" etc.) default red
 * @returns {{x: Number, y: Number, z: Number, color: String, toString: function, render: function}}
 */
exports.createLego = function(x, y, z, color) {
    return {
        x: x || 2,
        y: y || 4,
        z: z || 2,
        color: color || "red",
        toString: function() {
            var result = "";

            //adds all lego objects for one line except the last one
            for (var i = 0; i < (x - 1); i++) {
                result += "® ";
            }

            //adds the last one as well without any whitespace
            result += "®";

            for (var j = 0; j < (y - 1); j++) {
                result += "\n" + result;
            }

            return result;
        },

        render: function() {
            var renderedResult = this.toString();
            return console.log(renderedResult);
        }
    };
};
