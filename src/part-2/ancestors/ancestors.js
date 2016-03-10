"use strict";

// private
var treeString;

/**
 *
 * @constructor
 */
function Ancestors(ancestorObject) {
    treeString = "";
    // call the private method createAncestorTree, starting at level 0
    createAncestorTree(ancestorObject, 0);
}

/**
 * This function is a recursive function that updates the property treeString
 * to represent a treeview.
 * @param {Object} current - The current object to examin
 * @param {Number} level - The current object level
 * @private
 */
var createAncestorTree = function(current, level) {
  var levelString = "";

  if(!level) {
    level = 1;
  }

  for(var i = 0; i < level; i++) {
    levelString += "\t";
  }

  if(current.name) {
      treeString += current.name;
      for(var j = 0; j < current.children.length; j++){
        treeString += "\n" + levelString;
        createAncestorTree(current.children[j], level + 1);
      }
  }
};

/**
 *
 * @returns {string}
 */
Ancestors.prototype.toString = function() {
    return treeString;
};

module.exports = Ancestors;
