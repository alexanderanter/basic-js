"use strict";

var Lego = require("../../../src/part-2/simple-lego-builder/lego-part2").Lego;
var expect = require("chai").expect;

describe("Part 2 - Using \"Constructor pattern\" (file: lego-part2.js)", function() {

    describe("Testing Lego constructor", function() {

        it("instantiated object should be instance of Lego", function(done) {

            expect(new Lego() instanceof Lego).to.be.true;

            done();
        });

    });

    describe("Testing Lego constructor methods", function() {
        var lobj = new Lego(4, 2, 1, "green");

        it("Instantiated object should have a toString-method", function(done) {

            expect(lobj.hasOwnProperty("toString")).to.be.true;
            done();
        });

        it("toString() should render correct", function(done) {

            expect(lobj.toString()).eql("® ® ® ®\n® ® ® ®");
            done();
        });

        it("Should have a render-method", function(done) {

            expect(typeof lobj.render).eql("function");
            done();
        });

    });

});
