import { question } from "readline-sync";
// question always returns a string
// question doesnt create new line by default

const main = (): void => {
  const firstNumStr: string = question("Enter first number:\n");
  const operatorStr: string = question("Enter operator:\n");
  const secondNumStr: string = question("Enter second number:\n");

  const operator = isItOperator(operatorStr);
  console.log(operator);
};

const isItNum = (str: string): boolean => {
  const maybeNum = parseFloat(str); // will either return the num ie 44 or NaN
  const isNum: boolean = !isNaN(maybeNum); // should return T if ^ is actually a num in a str
  return isNum;
};

const isItOperator = (str: string): boolean => {
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
