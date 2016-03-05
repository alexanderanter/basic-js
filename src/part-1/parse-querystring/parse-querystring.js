/**
 * Module for a simple querystring parser
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * The function takes a String parameter. It will be a URL (in most cases) with
 * random number of querystrings ex. http://lnu.se?key1=value1&key2=value2
 * The function should return an object in the form
 * {key1: value1, key2: value2}
 * If no querystrings are provided an empty object should be returned
 * If no value is provided an empty string should be the value eg.
 * http://lnu.se?key should return {key: ''}
 * @param {string} url
 * @returns {Object}
 */
exports.parse = function(url) {
    return {};
};
