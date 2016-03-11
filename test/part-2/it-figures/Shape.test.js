/**
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

var expect = require("chai").expect;

describe("Shape - Using public properties (file: Shape.js)", function() {
    var Shape;

    describe("Type", function() {
        it("Shape should be defined", function() {
            Shape = require("./../../../src/part-2/it-figures/Shape");
        });
    });

    describe("Constructor", function() {
        it("should set the property length to 13.8", function() {
            var shape = new Shape(11.7, 42.4);
            expect(shape).to.have.property("length", 11.7);
        });

        it("should set the property height to 58.9.8", function() {
            var shape = new Shape(3.8, 58.9);
            expect(shape).to.have.property("height", 58.9);
        });
    });

    describe("Prototype", function() {
        describe("toString method", function () {
            it("should be defined as an own property", function () {
                expect(Shape.prototype.hasOwnProperty("toString")).to.equal(true);
            });
        });
    });
});

describe("Ellipse - Using public properties (file: Shape.js)", function() {
    var Ellipse;

    describe("Type", function() {
        it("Ellipse should be defined", function() {
            Ellipse = require("./../../../src/part-2/it-figures/Shape").Ellipse;
        });

        it("should be instance of Ellipse", function() {
            var ellipse = new Ellipse();
            expect(ellipse).to.be.an.instanceOf(Ellipse);
        });
    });

    describe("Constructor", function() {
        it("should set the property length to 11.7", function() {
            var ellipse = new Ellipse(11.7, 42.4);
            expect(ellipse).to.have.property("length", 11.7);
        });

        it("should set the property height to 58.9.8", function() {
            var ellipse = new Ellipse(3.8, 58.9);
            expect(ellipse).to.have.property("height", 58.9);
        });
    });

    describe("Prototype", function() {
        describe("area method", function() {
            it("should be defined", function() {
                expect(Ellipse.prototype).to.have.property("area").that.is.a("Function");
            });

            it("{ length = 156.8, height= 14.8 } should return 1822.6263939066546", function() {
                var ellipse = new Ellipse(156.8, 14.8);
                expect(ellipse.area()).to.equal(1822.6263939066546);
            });
        });

        describe("circumference method", function() {
            it("should be defined", function() {
                expect(Ellipse.prototype).to.have.property("circumference").that.is.a("Function");
            });

            it("{ length = 12, height = 19.4 } should return 50.67419139044478", function() {
                var ellipse = new Ellipse(12, 19.4);
                expect(ellipse.circumference()).to.equal(50.67419139044478);
            });
        });

        describe("inherit toString method", function() {
            it("should NOT be defined as an own property", function() {
                expect(Ellipse.prototype.hasOwnProperty("toString")).to.equal(false);
            });

            it("{ length = 8, height= 15.2 } should return \"längd: 8, höjd: 15.2, omkrets: 38.2, area: 95.5\"", function() {
                var ellipse = new Ellipse(8, 15.2);
                expect(ellipse.toString()).to.equal("längd: 8, höjd: 15.2, omkrets: 38.2, area: 95.5");
            });
        });
    });
});

describe("Rectangle - Using public properties (file: Shape.js)", function() {
    var Rectangle;

    describe("Type", function() {
        it("Rectangle should be defined", function() {
            Rectangle = require("./../../../src/part-2/it-figures/Shape").Rectangle;
        });

        it("should be instance of Rectangle", function() {
            var retangle = new Rectangle();
            expect(retangle).to.be.an.instanceOf(Rectangle);
        });
    });

    describe("Constructor", function() {
        it("should set the property length to 15.7", function() {
            var retangle = new Rectangle(15.7, 38.2);
            expect(retangle).to.have.property("length", 15.7);
        });

        it("should set the property height to 23.1", function() {
            var retangle = new Rectangle(72.6, 23.1);
            expect(retangle).to.have.property("height", 23.1);
        });
    });

    describe("Prototype", function() {
        describe("area method", function() {
            it("should be defined", function() {
                expect(Rectangle.prototype).to.have.property("area").that.is.a("Function");
            });

            it("{ length = 4, height= 3.4} should return 1822.6263939066546", function() {
                var retangle = new Rectangle(4, 3.4);
                expect(retangle.area()).to.equal(13.6);
            });
        });

        describe("circumference method", function() {
            it("should be defined", function() {
                expect(Rectangle.prototype).to.have.property("circumference").that.is.a("Function");
            });

            it("{ length = 51.6, height = 5.3 } should return 50.67419139044478", function() {
                var retangle = new Rectangle(51.6, 5.3);
                expect(retangle.circumference()).to.equal(113.8);
            });
        });

        describe("inherit toString method", function() {
            it("should NOT be defined as an own property", function() {
                expect(Rectangle.prototype.hasOwnProperty("toString")).to.equal(false);
            });

            it("{ length = 8, height= 4.2 } should return \"längd: 8, höjd: 15.2, omkrets: 38.2, area: 95.5\"", function() {
                var retangle = new Rectangle(8, 4.2);
                expect(retangle.toString()).to.equal("längd: 8, höjd: 4.2, omkrets: 24.4, area: 33.6");
            });
        });
    });
});
