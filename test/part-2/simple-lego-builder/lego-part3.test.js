"use strict";

var Lego = require("../../../src/part-2/simple-lego-builder/lego-part3").Lego;
var expect = require("chai").expect;

describe("Part 3 - Using \"Constructor/Prototype pattern\" (file: lego-part3.js)", function(){


    describe("Testing Lego constructor", function () {

        it("instantiated object should be instance of Lego", function (done) {

            var lobj = new Lego();

            expect(lobj instanceof Lego).to.be.true;

            done();
        });
    });

    describe("Testing Lego constructor methods", function () {
        var lobj = new Lego(4, 2, 1, "green");

        it("Methods (render and toString) should be prototype-methods", function (done) {

            expect(Lego.prototype.hasOwnProperty("render")).to.be.true;
            expect(Lego.prototype.hasOwnProperty("toString")).to.be.true;

            done();
        });

        it("toString() should render correct", function (done) {


            expect(lobj.toString()).eql("® ® ® ®\n® ® ® ®");
            done();
        });

    });

});
