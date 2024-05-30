import { question } from "readline-sync";
// question always returns a string
// question doesnt create new line by default

type Operator = "+" | "-" | "*" | "/";

const main = (): void => {
  const firstNumStr: string = question("Enter first number:\n");
  const operatorStr: string = question("Enter operator:\n");
  const secondNumStr: string = question("Enter second number:\n");

  const isInputValid: boolean =
    isItNum(firstNumStr) && isItOperator(operatorStr) && isItNum(secondNumStr);

  if (isInputValid) {
    const firstNum: number = parseFloat(firstNumStr);
    const secondNum: number = parseFloat(secondNumStr);
    const result: number = calculate(
      firstNum,
      operatorStr as Operator,
      secondNum
    );
    console.log(`\nResult: ${result}\n`);
  } else {
    console.log("\nInvalid input. Try again :-)\n");
    main();
  }
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

const calculate = (num: number, op: Operator, num2: number): number => {
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
