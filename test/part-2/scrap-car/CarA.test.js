/**
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

var expect = require("chai").expect;

describe("CarA - Using public properties (file: CarA.js)", function() {
    var CarA;

    describe("Type", function() {
        it ("CarA should be defined", function() {
            CarA = require("./../../../src/part-2/scrap-car/CarA");
        });

        it ("should be instance of Car", function() {
            var car = new CarA();
            expect(car).to.be.an.instanceOf(CarA);
        });
    });

    describe("Constructor", function() {
        it ("should have the default speed set to 0", function() {
            var car = new CarA();
            expect(car).to.have.property("speed", 0);
        });

        it ("should have a default pet name", function() {
            var car = new CarA();
            expect(car).to.have.property("petName", "Skrotbilen");
        });

        it ("should set car's pet name if provided", function() {
            var car = new CarA("Bettan");
            expect(car).to.have.property("petName", "Bettan");
        });
    });

    describe("Prototype", function() {
        describe("accelerate method", function() {
            it("should have an accelerate method", function() {
                expect(CarA.prototype).to.have.property("accelerate").that.is.a("Function");
            });

            it("should have increased the speed of the car to 30 km/h", function() {
                var car = new CarA();
                car.accelerate(30);
                expect(car.speed).to.equal(30);
            });

            it("should have decreased the speed of the car to 20 km/h", function() {
                var car = new CarA();
                car.accelerate(30);
                car.accelerate(-10);
                expect(car.speed).to.equal(20);
            });

            it("should have returned \"Lorems hastighet ökar från 0 km/h till 30 km/h.\"", function() {
                var car = new CarA("Lorem");
                expect(car.accelerate(30)).to.equal("Lorems hastighet ökar från 0 km/h till 30 km/h.");
            });

            it("should have returned \"Lorems hastighet minskar från 30 km/h till 10 km/h.\"", function() {
                var car = new CarA("Lorem");
                car.accelerate(30);
                expect(car.accelerate(-20)).to.equal("Lorems hastighet minskar från 30 km/h till 10 km/h.");
            });

            it("no argument should have returned \"Lorems hastighet är oförändrad!\"", function() {
                var car = new CarA("Lorem");
                expect(car.accelerate()).to.equal("Lorems hastighet är oförändrad!");
            });

            it("not a number argument should have returned \"Lorems hastighet är oförändrad!\"", function() {
                var car = new CarA("Lorem");
                expect(car.accelerate("not a number")).to.equal("Lorems hastighet är oförändrad!");
            });
        });

        describe("turnLeft method", function() {
            it ("should have a turnLeft method", function() {
                expect(CarA.prototype).to.have.property("turnLeft").that.is.a("Function");
            });

            it("should have returned \"Lorem svänger vänster.\"", function() {
                var car = new CarA("Lorem");
                expect(car.turnLeft()).to.equal("Lorem svänger vänster.");
            });
        });

        describe("turnRight method", function() {
            it ("should have a turnRight method", function() {
                expect(CarA.prototype).to.have.property("turnRight").that.is.a("Function");
            });

            it("should have returned \"Lorem svänger höger.\"", function() {
                var car = new CarA("Lorem");
                expect(car.turnRight()).to.equal("Lorem svänger höger.");
            });
        });

        describe("start method", function() {
            it ("should have a start method", function() {
                expect(CarA.prototype).to.have.property("start").that.is.a("Function");
            });

            it("should have returned \"Ipsum startar.\"", function() {
                var car = new CarA("Ipsum");
                expect(car.start()).to.equal("Ipsum startar.");
            });
        });

        describe("stop method", function() {
            it ("should have a stop method", function() {
                expect(CarA.prototype).to.have.property("stop").that.is.a("Function");
            });

            it("should have returned \"Ipsum stannar.\"", function() {
                var car = new CarA("Ipsum");
                expect(car.stop()).to.equal("Ipsum stannar.");
            });
        });
    });
});
