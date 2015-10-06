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
            Ellipse = require("./../../../src/part-2/monumental-ellipse/Ellipse");
        });

        it("should be instance of Ellipse", function() {
            var ellipse = new Ellipse(0, 0);
            expect(ellipse).to.be.an.instanceOf(Ellipse);
        });
    });

    describe("Constructor", function() {
        it("should set the property a to 11.7", function() {
            var ellipse = new Ellipse(11.7, 42.4);
            expect(ellipse).to.have.property("a", 11.7);
        });

        it("should set the property b to 58.9", function() {
            var ellipse = new Ellipse(3.8, 58.9);
            expect(ellipse).to.have.property("b", 58.9);
        });
    });

    describe("Properties", function() {
        describe("a", function() {
            it("should set the property a to 11.7", function() {
                var ellipse = new Ellipse(11.7, 42.4);
                expect(ellipse).to.have.property("a", 11.7);
            });

            it("should set the property a to 0", function() {
                var ellipse = new Ellipse(1, 1);
                ellipse.a = 0;
                expect(ellipse).to.have.property("a", 0);
            });

            it("should throw exception when a is negative", function() {
                var ellipse = new Ellipse(0, 0);
                expect(function() {
                    ellipse.a = -1;
                }).to.throw(Error);
            });

            it("should throw exception when a is a string (\"not a number\")", function() {
                var ellipse = new Ellipse(0, 0);
                expect(function() {
                    ellipse.a = "not a number";
                }).to.throw(Error);
            });

            it("should set the property a to 123 when a is the string \"123\"", function() {
                var ellipse = new Ellipse(0, 0);
                ellipse.a = "123";
                expect(ellipse).to.have.property("a", 123);
            });

        });

        describe("b", function() {
            it("should set the property b to 58.9", function() {
                var ellipse = new Ellipse(3.8, 58.9);
                expect(ellipse).to.have.property("b", 58.9);
            });

            it("should set the property b to 0", function() {
                var ellipse = new Ellipse(1, 1);
                ellipse.b = 0;
                expect(ellipse).to.have.property("b", 0);
            });

            it("should throw exception when b is negative", function() {
                var ellipse = new Ellipse(0, 0);
                expect(function() {
                    ellipse.b = -1;
                }).to.throw(Error);
            });

            it("should throw exception when b is a string (\"not a number\")", function() {
                var ellipse = new Ellipse(0, 0);
                expect(function() {
                    ellipse.b = "not a number";
                }).to.throw(Error);
            });

            it("should set the property b to 123 when b is the string \"123\"", function() {
                var ellipse = new Ellipse(0, 0);
                ellipse.b = "123";
                expect(ellipse).to.have.property("b", 123);
            });
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
