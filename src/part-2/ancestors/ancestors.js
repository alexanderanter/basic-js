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

    // TODO: Your code here - Use the debugger to analyze "current"


    console.log("current");

};

/**
 *
 * @returns {string}
 */
Ancestors.prototype.toString = function() {
    return treeString;
};

module.exports = Ancestors;
