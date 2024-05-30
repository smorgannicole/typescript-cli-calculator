import { question } from "readline-sync";
// question always returns a string
// question doesnt create new line by default

const main = (): void => {
  const firstStr: string = question("Enter first number:\n");
  const operator: string = question("Enter operator:\n");
  const secondStr: string = question("Enter second number:\n");

  console.log(firstStr, operator, secondStr);
};

main();
