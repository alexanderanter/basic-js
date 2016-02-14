/**
 * @author Mats Loock
 * @version 1.0.0
 */

var Shape = require("./../../../src/part-1/right-triangle/Shape");
var expect = require("chai").expect;

describe("Shape.createRightTriangle", function() {
    "use strict";

    it("Shape.createRightTriangle(3); should return \"#\\n##\\n###\\n\"", function(done) {
        expect(Shape.createRightTriangle(3)).to.equal("#\n##\n###\n");
        done();
    });

    it("Shape.createRightTriangle(7); should return \"#\\n##\\n###\\n####\\n#####\\n######\\n#######\\n\"", function(done) {
        expect(Shape.createRightTriangle(7)).to.equal("#\n##\n###\n####\n#####\n######\n#######\n");
        done();
    });
});
