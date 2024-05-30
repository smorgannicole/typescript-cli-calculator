"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var main = function () {
    var firstNumStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operatorStr = (0, readline_sync_1.question)("Enter operator:\n");
    var secondNumStr = (0, readline_sync_1.question)("Enter second number:\n");
    var isInputValid = isItNum(firstNumStr) && isItOperator(operatorStr) && isItNum(secondNumStr);
    if (isInputValid) {
        var firstNum = parseFloat(firstNumStr);
        var secondNum = parseFloat(secondNumStr);
        var result = calculate(firstNum, operatorStr, secondNum);
        console.log("\nResult: ".concat(result, "\n"));
    }
    else {
        console.log("\nInvalid input. Try again :-)\n");
        main();
    }
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
var calculate = function (num, op, num2) {
    switch (op) {
        case "+":
            return num + num2;
        case "-":
            return num - num2;
        case "*":
            return num * num2;
        case "/":
            return num / num2;
        default:
            throw new Error("Invalid operator");
    }
};
main();
