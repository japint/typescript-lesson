<<<<<<< HEAD
// object type
var student = {
    name: "Juan",
    age: 19,
    interest: ["Basketball", "Reading"],
};
console.log(student.gender);
=======
// data type
var addFunction = function (num1, num2, showResult, message) {
    var result = num1 + num2;
    if (showResult) {
        console.log(message + result);
    }
    else {
        console.log("show result is false");
    }
};
var number1 = 5;
number1 = 9;
var number2 = 2.4;
var showResult = true;
var message = "Sum is: ";
addFunction(number1, number2, showResult, message);
>>>>>>> 26425057d6ba0bcc7b759d41749a3c4b528a67b3
