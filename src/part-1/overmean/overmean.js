/**
 * Module for overmean
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

exports.overmean = function(students) {

    if (!students) {
        return [];
    }

    // Calculate the mean
    var mean = students.reduce(function(current, next) {
        return current + next.points;
    }, 0) / students.length;

    // first get the one with points over or equal to the mean point (filter)
    // then just return the names (map)
    var result = students.filter(function(current) {
        return current.points >= mean;
    }).map(function(current) {
        return current.name;
    });

    return result;
};
