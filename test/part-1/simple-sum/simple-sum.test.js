var hello = require("../../../src/part-1/simple-sum/simple-sum");
var expect = require("chai").expect;

describe("Test the function sum", function() {
    "use strict";

    it("sum(); should return the Number 42", function(done) {
        expect(hello.sum()).to.eql(42);
        done();
    });

});
