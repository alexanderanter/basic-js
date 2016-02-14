/**
 * Namespace for Shape.
 *
 * @namespace Shape
 * @author Mats Loock
 * @version 1.0.0
 */

var Shape = (function() {
    "use strict";

    return {
        /**
         * Returns a string representing a right triangle.
         *
         * @param {Number} base The number of characters in the triangle's base.
         * @returns {String}
         * @function Shape.createRightTriangle
         */
        createRightTriangle: function(base) {
          var triangle = "";
          var i;
          var j;
          for(i = 1;i <= base; i++) {
              for(j = 1; j <= i; j++){
                triangle += "#";
              }
              triangle += "\n";
          }
          return triangle;
        }
    };
}());

module.exports = Shape;
