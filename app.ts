// data type
const addFunction = (
  num1: number,
  num2: number,
  showResult: boolean,
  message: string
) => {
  const result = num1 + num2;
  if (showResult) {
    console.log(message + result);
  } else {
    console.log("show result is false");
  }
};

let number1 = 5;
number1 = 9;

const number2 = 2.4;
const showResult = true;
const message = "Sum is: ";

addFunction(number1, number2, showResult, message);
