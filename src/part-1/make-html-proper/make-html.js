/**
 * Namespace for Make Html Proper assignment
 *
 * @namespace MakeHtml Proper
 * @author thajo
 * @version 1.0.0
 */
var MakeHtml = (function() {
    "use strict";

    return {

        makeStartTag: function(element) {
            return "<" + element + ">";
        },

        makeEndTag: function(element) {
              return "</" + element + ">";
        },

        makeElement: function(element, text) {
            var completeElement;
            completeElement = MakeHtml.makeStartTag(element) + text + MakeHtml.makeEndTag(element);
            return completeElement;
        },

        makeSnippet: function(blocks) {
          var keys = Object.keys(blocks); // ['make','color','year']
          var snippet = "";

          keys.forEach(function(key) {
            var testVal = (blocks[key]);
            var keys = Object.keys(testVal);

            var seperator = 0;   //used to change turns in the if else statement
            var theElement = "";

            keys.forEach(function(key){

              if(seperator === 0){
                theElement = testVal[key];
                seperator = 1;
              }else { //if not an element it will be value and add its to the snippet
                snippet += MakeHtml.makeElement(theElement, testVal[key]);
                seperator = 0;
              }
              
            });
          });
          return snippet;
        }
    };
}());

module.exports = MakeHtml;
