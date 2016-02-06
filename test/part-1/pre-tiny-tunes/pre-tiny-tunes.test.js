"use strict";

var t = require("../../../src/part-1/pre-tiny-tunes/pre-tiny-tunes");
var expect = require("chai").expect;

describe("Test roundUp()", function() {
    it("roundUp(12.4); should return 13", function(done) {
        expect(t.roundUp(12.4)).to.eql(13);
        done();
    });
    it("roundUp(132.9); should return 133", function(done) {
        expect(t.roundUp(132.9)).to.eql(133);
        done();
    });
});

describe("Test roundDown()", function() {
    it("roundDown(12.5); should return 12", function(done) {
        expect(t.roundDown(12.5)).to.eql(12);
        done();
    });
    it("roundDown(132.9); should return 132", function(done) {
        expect(t.roundDown(132.9)).to.eql(132);
        done();
    });
});

describe("Test round()", function() {
    it("round(12.5); should return 13", function(done) {
        expect(t.round(12.5)).to.eql(13);
        done();
    });
    it("round(132.4); should return 132", function(done) {
        expect(t.round(132.4)).to.eql(132);
        done();
    });
});


describe("Test getStringLength()", function() {
    it("getStringLength(\"Hello, World!\"); should return 13", function(done) {
        expect(t.getStringLength("Hello, World!")).to.eql(13);
        done();
    });
    it("getStringLength(\"Det blauser hä i Kamar\"); should return 22", function(done) {
        expect(t.getStringLength("Det blauser hä i Kamar")).to.eql(22);
        done();
    });

});


describe("Test getFirstLetter()", function() {
    it("getFirstLetter(\"Hello, World!\"); should return \"H\"", function(done) {
        expect(t.getFirstLetter("Hello, World!")).to.eql("H");
        done();
    });
    it("getFirstLetter(\"Jolly good!\"); should return \"J\"", function(done) {
        expect(t.getFirstLetter("Jolly good!")).to.eql("J");
        done();
    });

});

describe("Test getPositionOfQuestionMark()", function() {
    it("getPositionOfQuestionMark(\"Is it a key?\"); should return 11", function(done) {
        expect(t.getPositionOfQuestionMark("Is it a key?")).to.eql(11);
        done();
    });
    it("getPositionOfQuestionMark(\"Jolly good still?\"); should return 16", function(done) {
        expect(t.getPositionOfQuestionMark("Jolly good still?")).to.eql(16);
        done();
    });

});

describe("Test isEqual()", function() {
    it("isEqual(\"Potato\", \"Potato\"); should return true", function(done) {
        expect(t.isEqual("Potato","Potato")).to.eql(true);
        done();
    });
    it("isEqual(\"Apple\", \"Pear\"); should return false", function(done) {
        expect(t.isEqual("Apple","Pear")).to.eql(false);
        done();
    });
    it("isEqual(\"potato\", \"Potato\"); should return false", function(done) {
        expect(t.isEqual("potato","Potato")).to.eql(false);
        done();
    });

});

describe("Test isOdd()", function() {
    it("isOdd(13); should return true", function(done) {
        expect(t.isOdd(13)).to.eql(true);
        done();
    });
    it("isOdd(12); should return false", function(done) {
        expect(t.isOdd(12)).to.eql(false);
        done();
    });
});

describe("Test isEven()", function() {
    it("isEven(13); should return false", function(done) {
        expect(t.isEven(13)).to.eql(false);
        done();
    });
    it("isEven(12); should return true", function(done) {
        expect(t.isEven(12)).to.eql(true);
        done();
    });
});
