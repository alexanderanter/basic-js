"use strict";

/**
 * Creates a new Lego object
 *
 * @constructor
 * @param {Number} x Number horisontal knobs on the lego brick
 * @param {Number} y Number vertical knobs on the lego brick
 * @param {Number} z Hight of the lego brick
 * @param {String} color Color of the lego brick ("blue", "red", "green" etc.)
 */
function Lego(x, y, z, color) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = color;
    this.toString = function() {
        var result = "";

        for (var i = 0; i < (x - 1); i++) {
            result += "® ";
        }

        result += "®";

        for (var j = 0; j < (y - 1); j++) {
            result += "\n" + result;
        }

        return result;
    };

    this.render = function() {
        var renderedResult = this.toString();
        return console.log(renderedResult);
    };
}

exports.Lego = Lego;
