var addOrCombine = function (data1, data2) {
    // filtering
    var result;
    if (typeof data1 === "number" && typeof data2 === "number") {
        result = data1 + data2;
    }
    else {
        result = "".concat(data1.toString(), " ").concat(data2.toString());
    }
    return result;
};
var combineNumbers = addOrCombine(3, 4);
console.log(combineNumbers);
var combineString = addOrCombine("Hello", "World");
console.log(combineString);
