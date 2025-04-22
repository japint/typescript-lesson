const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("button");

const add = (num1, num2) => {
  return num1 + num2;
};

btn.addEventListener("click", () => {
  console.log("Total:", add(input1.value, input2.value));
});
