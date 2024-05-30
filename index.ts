import { question } from "readline-sync";
// question always returns a string
// question doesnt create new line by default

const main = (): void => {
  const firstStr: string = question("Enter first number:\n");
  const operator: string = question("Enter operator:\n");
  const secondStr: string = question("Enter second number:\n");
};

const isItNum = (str: string): boolean => {
  const maybeNum = parseFloat(str); // will either return the num ie 44 or NaN
  const isNum: boolean = !isNaN(maybeNum); // should return T if ^ is actually a num in a str
  return isNum;
};

main();
