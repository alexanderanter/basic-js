/**
 * @author thajo
 * @version 1.0.0
 */

"use strict";

var sa = require("./../../../src/part-1/sorting-arrays/sorting-arrays");
var expect = require("chai").expect;

describe("SortingArrays.sortAscending()", function() {

    it("SortingArrays.sortAscending should throw a TypeError if the parameter is not an Array", function(done) {
        expect(function(){sa.sortAscending("not array");}).to.throw(TypeError);
        done();
    });

    it("SortingArrays.sortAscending should throw an Error if the parameter is an empty Array", function(done) {
        expect(function(){sa.sortAscending([]);}).to.throw(Error);
        done();
    });

    it("SortingArrays.sortAscending([2, 3, 6, 1, 4])", function(done) {
        expect(sa.sortAscending([2, 3, 6, 1, 4])).to.eql([1, 2, 3, 4, 6]);
        done();
    });

    it("SortingArrays.sortAscending([4])", function(done) {
        expect(sa.sortAscending([4])).to.eql([4]);
        done();
    });

    it("SortingArrays.sortAscending([32817, 1987, -4, -2])", function(done) {
        expect(sa.sortAscending([32817, 1987, -4, -2])).to.eql([-4, -2, 1987, 32817]);
        done();
    });

});

describe("SortingArrays.sortDescending", function() {

    it("SortingArrays.sortDescending should throw a TypeError if the parameter is not an Array", function(done) {
        expect(function(){sa.sortDescending("not array");}).to.throw(TypeError);
        done();
    });

    it("SortingArrays.sortDescending should throw an Error if the parameter is an empty Array", function(done) {
        expect(function(){sa.sortDescending([]);}).to.throw(Error);
        done();
    });

    it("SortingArrays.sortDescending([2, 3, 6, 1, 4])", function(done) {
        expect(sa.sortDescending([2, 3, 6, 1, 4])).to.eql([6, 4, 3, 2, 1]);
        done();
    });

    it("SortingArrays.sortDescending([4])", function(done) {
        expect(sa.sortDescending([4])).to.eql([4]);
        done();
    });

    it("SortingArrays.sortDescending([32817, 1987, 4, 2])", function(done) {
        expect(sa.sortDescending([32817, 1987, -4, -2])).to.eql([32817, 1987, -2, -4]);
        done();
    });

});


