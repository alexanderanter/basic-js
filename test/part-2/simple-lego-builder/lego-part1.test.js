"use strict";

var lf = require("../../../src/part-2/simple-lego-builder/lego-part1");
var expect = require("chai").expect;

describe("Part 1 - Using \"Factory pattern\" (file: lego-part1.js)", function() {
    describe("Testing Lego-creator properties (egenskaper)", function() {

        it("createLego() should return {x: 2, y: 4, z: 2, color: \"red\"}", function(done) {

            var result = lf.createLego();
            expect(result.x).eql(2);
            expect(result.y).eql(4);
            expect(result.z).eql(2);
            expect(result.color).eql("red");
            done();
        });

        it("createLego(10, 3, 1, \"blue\")  should return {x: 10, y: 3, z: 1, color: \"blue\"}", function(done) {

            var result = lf.createLego(10, 3, 1, "blue");
            expect(result.x).eql(10);
            expect(result.y).eql(3);
            expect(result.z).eql(1);
            expect(result.color).eql("blue");
            done();
        });
    });

    describe("Testing Lego-creator methods (metoder)", function() {

        it("createLego - Returned object should have a toString-method", function(done) {

            expect(lf.createLego().hasOwnProperty("toString")).to.be.true;
            done();
        });

        it("toString() should render correct", function(done) {

            var result = lf.createLego(4, 2, 1, "green").toString();
            expect(result).eql("® ® ® ®\n® ® ® ®");
            done();
        });

        it("createLego - Should have a render-method", function(done) {

            var result = lf.createLego(10, 3, 1, "blue");
            expect(typeof result.render).eql("function");
            done();
        });

    });
});
