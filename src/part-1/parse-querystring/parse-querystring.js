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
  var urlLength = url.length;
  var ampPos = url.indexOf('&');
  var urlList = {};
    //takes out the first valuepair if it exists and also add a conditional if only the key is set but not value
    if (url.indexOf('?') !== -1 && url.indexOf('=') !== -1) {
      urlList[url.split("?")[1].split("=")[0]] = url.split("=")[1].split("&")[0];
    }else if (url.indexOf('key') !== -1) {
      urlList.key = "";
    }
    //loops through as many & chars there are in the string and adds the valuepair to the object
    while (ampPos !== -1) {
      var urlCutOff = url.substring(ampPos, urlLength);
      urlList[urlCutOff.split("&")[1].split("=")[0]] = urlCutOff.split("=")[1].split("&")[0];
      ampPos = url.indexOf('&', ampPos + 1);
    }
    return urlList;
};
