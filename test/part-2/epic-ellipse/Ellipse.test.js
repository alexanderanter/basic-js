/**
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

var expect = require("chai").expect;

describe("Ellipse - Using public properties (file: Ellipse.js)", function() {
    var Ellipse;

    describe("Type", function() {
        it("Ellipse should be defined", function() {
            Ellipse = require("./../../../src/part-2/epic-ellipse/Ellipse");
        });

        it("should be instance of Ellipse", function() {
            var ellipse = new Ellipse();
            expect(ellipse).to.be.an.instanceOf(Ellipse);
        });
    });

    describe("Constructor", function() {
        it("should set the property a to 13.8", function() {
            var ellipse = new Ellipse(11.7, 42.4);
            expect(ellipse).to.have.property("a", 11.7);
        });

        it("should set the property b to 58.9.8", function() {
            var ellipse = new Ellipse(3.8, 58.9);
            expect(ellipse).to.have.property("b", 58.9);
        });
    });

    describe("Prototype", function() {
        describe("area method", function() {
            it("should be defined", function() {
                expect(Ellipse.prototype).to.have.property("area").that.is.a("Function");
            });

            it("{ a = 78.2, b = 7.4 } should return 1817.9768367793415", function() {
                var ellipse = new Ellipse(78.2, 7.4);
                expect(ellipse.area()).to.equal(1817.9768367793415);
            });
        });

        describe("circumference method", function() {
            it("should be defined", function() {
                expect(Ellipse.prototype).to.have.property("circumference").that.is.a("Function");
            });

            it("{ a = 6, b = 9.7 } should return 50.67419139044478", function() {
                var ellipse = new Ellipse(6, 9.7);
                expect(ellipse.circumference()).to.equal(50.67419139044478);
            });
        });

        describe("toString method", function() {
            it("should be defined as an own property", function() {
                expect(Ellipse.prototype.hasOwnProperty("toString")).to.equal(true);
            });

            it("{ a = 13.2, b = 42.1 } should return { a: 13.2, b: 42.1, area: 1745.8, circumference: 196.0 }", function() {
                var ellipse = new Ellipse(13.2, 42.1);
                expect(ellipse.toString()).to.equal("{ a: 13.2, b: 42.1, area: 1745.8, circumference: 196.0 }");
            });
        });
    });
});
