/**
 * @author thajo
 * @version 1.0.0
 */

"use strict";

var ss = require("./../../../src/part-1/sub-sequence/sub-sequence");
var expect = require("chai").expect;

describe("Test the function isSequence", function() {


    it("isSequence([1, 2, 3, 4, 5], [1, 2, 3]); should return true", function(done) {
        expect(ss.isSequence([1, 2, 3, 4, 5], [1, 2, 3])).to.be.true;
        done();
    });

    it("isSequence([1, 2, 3], [1, 3]); should return false", function(done) {
        expect(ss.isSequence([1, 2, 3], [1, 3])).to.be.false;
        done();
    });

    it("isSequence([1, 2, 4, 2, 3], [2, 3]); should return true", function(done) {
        expect(ss.isSequence([1, 2, 4, 2, 3], [2, 3])).to.be.true;
        done();
    });

    it("isSequence([3, 5, 4, 2, 3, 5, 2, 3, 5, 3, 2, 3], [3, 5, 2, 2]); should return true", function(done) {
        expect(ss.isSequence([3, 5, 4, 2, 3, 5, 2, 3, 5, 2, 2, 3], [3, 5, 2, 2])).to.be.true;
        done();
    });

    it("isSequence([1, 2, 3], [2]); should return true", function(done) {
        expect(ss.isSequence([1, 2, 3], [2])).to.be.true;
        done();
    });

    it("isSequence([1, 2, 3, 5, 6], [4]); should return false", function(done) {
        expect(ss.isSequence([1, 2, 3, 5, 6], [4])).to.be.false;
        done();
    });

    it("isSequence([5, 5, 3, 5, 6], [5, 5, 3, 5, 6]); should return true", function(done) {
        expect(ss.isSequence([5, 5, 3, 5, 6], [5, 5, 3, 5, 6])).to.be.true;
        done();
    });

    it("isSequence([5, 5, 3, 5, 6], [5, 5, 3, 5, 6, 7]); should return false", function(done) {
        expect(ss.isSequence([5, 5, 3, 5, 6], [5, 5, 3, 5, 6, 7])).to.be.false;
        done();
    });

    it("isSequence([5], [5, 5]); should return false", function(done) {
        expect(ss.isSequence([5], [5, 5])).to.be.false;
        done();
    });

    it("isSequence([5], [5]); should return true", function(done) {
        expect(ss.isSequence([5], [5])).to.be.true;
        done();
    });


});
