/**
 * Namespace for Make Html assignment
 *
 * @namespace MakeHtml
 * @author thajo
 * @version 1.0.0
 */
var MakeHtml = (function() {
    "use strict";


    return {

        makeStartTag: function(element) {
            // TODO: Write this code first
            return "<" + element + ">";

        },

        makeEndTag: function(element) {
            // TODO: Write this code second
              return "</" + element + ">";
        },

        makeElement: function(element, text) {

            // TODO: Write this code third
            var completeElement;
            completeElement = MakeHtml.makeStartTag(element) + text + MakeHtml.makeEndTag(element);
            return completeElement;
        },

        makeSnippet: function(blocks) {
            // TODO: Write this code last

            var keys = Object.keys(blocks); // ['make','color','year']
            var snippet = "";

            keys.forEach(function(key) {
              var testVal = (blocks[key]);
              var keys = Object.keys(testVal);
              keys.forEach(function(key){
                snippet += MakeHtml.makeElement(key, testVal[key]);
              });
            });
            return snippet;
        }
    };
}());

module.exports = MakeHtml;
