// data type
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("button");

const add = (num1, num2) => {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (!isNaN(number1) && !isNaN(number2)) {
    return number1 + number2;
  } else {
    return "Please enter a valid numbers";
  }
};

button.addEventListener("click", () => {
  console.log("Sum: ", add(input1.value, input2.value));
});
