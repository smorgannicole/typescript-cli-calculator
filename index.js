"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
// question always returns a string
// question doesnt create new line by default
var main = function () {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    console.log(firstStr, operator, secondStr);
};
main();
