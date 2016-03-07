/**
 * Module for sub sequence
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

/**
 * Returns true if sub is a sequence (or identical) to arr otherwise return false
 * @param {Array.<Number>} arr - Array with unordered integers
 * @param {Array.<Number>} sub - Array with unordered integers
 * @returns {boolean}
 */
exports.isSequence = function(arr, sub) {
    var firstArray = arr.slice();
    var secondArray = sub.slice();

    var validResult = false;
    var slicedPiece;
    var found = false;
    firstArray.forEach(function(key){
        if(key === secondArray[0]) {

            slicedPiece = firstArray.slice(firstArray.indexOf(key),secondArray.length);
            console.log(slicedPiece);

            if(slicedPiece.length === secondArray.length){
              for(var i = 0; i < secondArray.length; i++){
                if(slicedPiece[i] === secondArray[i] && found !== true){
                  validResult = true;
                }else {
                  validResult = false;
                
                }
              }
            }
            // count = key;
            // var i = 0;
            // while (i < secondArray.length){
            //     lastVal = secondArray[i];
            //     i++;
            // }

        }
    });



    //
    //
    // var count;
    // var found = false;
    // var lastVal;
    // var nextVal = 0;
    // firstArray.forEach(function(key){
    //     if(key === secondArray[0]) {
    //         count = key;
    //         var i = 0;
    //         while (i < secondArray.length){
    //             lastVal = secondArray[i];
    //             if (lastVal === secondArray[i] && !found){
    //                 found = true;
    //                 validResult = true;
    //             }else if (lastVal !== secondArray[i]) {
    //                 if (count === secondArray[i]) {
    //                     validResult = true;
    //                 }else {
    //                     validResult = false;
    //                 }
    //
    //                 console.log(lastVal + "lastVal")
    //                 console.log(secondArray[i] + "nextval");
    //
    //                 i++;
    //                 found = false;
    //                 count++;
    //             }

/*
                lastVal = i;
                console.log("this is last val" + lastVal + "this is new val" + secondArray[i]);
*/

/*                nextVal = i + 1;*/
/*                console.log(secondArray[nextVal] + "wtf");
                if(secondArray[nextVal] !== count){
                    count++;
                }*/


    //             i++;
    //         }
    //
    //     }
    // });

    return validResult;

};
