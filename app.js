var userData;
var trueData;
userData = "now";
userData = 5;
// additional checking
if (typeof userData === "string") {
    trueData = userData;
}
// data type never, use for utility function
// use for error generated functions, generate logs
// never
function generateErrorCode(description, errorCode) {
    throw { message: description, code: errorCode };
}
// another example
function infiniteLopp() {
    while (true) { }
}
generateErrorCode("Error happened", 502);
infiniteLopp();
