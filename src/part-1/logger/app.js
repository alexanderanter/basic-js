// run tests with 'npm test'

var simpleLogger = require("./logger");
simpleLogger.write("This is a info message", 0);
var result = simpleLogger.read(0);

// Test the sum-function here

// Print the result to the terminal (console)
console.log(result);
