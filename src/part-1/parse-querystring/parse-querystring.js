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
  url = "http://lnu.se?key1=value1&key2=value2&key3=value3";
  var urlLength = url.length;
  var countOfValues = 0;
  var ampPos = url.indexOf('&');
  var ampPositions = [];
  var urlList = {};
  //check if there is a value at all
  if (url.indexOf('?') !== -1 ){
    countOfValues = 1;
    //push key1 and value1
    urlList[url.split("?")[1].split("=")[0]] = url.split("=")[1].split("&")[0];
  }
  while (ampPos !== -1) {

    var urlCutOff = url.substring(ampPos, urlLength);
    urlList[urlCutOff.split("&")[1].split("=")[0]] = urlCutOff.split("=")[1].split("&")[0];
  console.log(urlCutOff);

//obsolete code
    ampPositions.push(ampPos);
    countOfValues++;


    ampPos = url.indexOf('&', ampPos + 1);

  }
  console.log(countOfValues);
  for(var i = 0; i < countOfValues;i++){
    console.log("tjoho");
  }


  // for( amount of & ) {
  //     put them in array and sort their charAt values
  //
  //     cut the string out between the char values
  //     then use the same url split code to check whats between & and =
  //     then check whats between = and & for the value
  //

  // }

  // console.log(url.split("?")[1].split("=")[0]); //key1
  // console.log(url.split("=")[1].split("&")[0]); //value1
// var test1 = url.split("?")[1].split("=")[0];
// var test2 = url.split("=")[1].split("&")[0];



  console.log(urlList);

    return urlList;
};
