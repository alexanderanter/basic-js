var om = require("../../../src/part-1/overmean/overmean");
var expect = require("chai").expect;
var assert = require("chai").assert;

describe("Test the overmean application", function() {
    "use strict";

    it("Should return the correct users", function(done) {

        var arr = [
            {name: "Stina", points: 1},
            {name: "Erik", points: 2},
            {name: "Maja", points: 3},
            {name: "Sven", points: 4}
        ];

        var result = om.overmean(arr);
        assert(Array.isArray(result), "Did not return an Array!");
        var correct = ["Maja", "Sven"];
        expect(result).eql(correct);
        done();
    });

    it("Should return the students with points equal to the mean point", function(done) {

        var arr = [
            {name: "Stina", points: 3},
            {name: "Erik", points: 3},
            {name: "Maja", points: 3}
        ];

        var result = om.overmean(arr);
        assert(Array.isArray(result), "Did not return an Array!");
        var correct = ["Stina", "Erik", "Maja"];
        expect(result).eql(correct);
        done();
    });

    it("overmean([]) should return []", function(done) {

        var arr = [];

        var result = om.overmean(arr);
        assert(Array.isArray(result), "Did not return an Array!");
        var correct = [];
        expect(result).eql(correct);
        done();
    });

    it("overmean() should return []", function(done) {

        var result = om.overmean();
        assert(Array.isArray(result), "Did not return an Array!");
        var correct = [];
        expect(result).eql(correct);
        done();
    });


});
