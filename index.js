"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
// question always returns a string
// question doesnt create new line by default
var main = function () {
    var firstNumStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operatorStr = (0, readline_sync_1.question)("Enter operator:\n");
    var secondNumStr = (0, readline_sync_1.question)("Enter second number:\n");
    var operator = isItOperator(operatorStr);
    console.log(operator);
};
var isItNum = function (str) {
    var maybeNum = parseFloat(str); // will either return the num ie 44 or NaN
    var isNum = !isNaN(maybeNum); // should return T if ^ is actually a num in a str
    return isNum;
};
var isItOperator = function (str) {
    switch (str) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
};
main();
