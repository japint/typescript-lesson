var Access;
(function (Access) {
    Access[Access["ADMIN"] = 1234] = "ADMIN";
    Access["MODERATOR"] = "admin";
    Access[Access["USER"] = 1111] = "USER";
})(Access || (Access = {}));
var student = {
    name: "Juan",
    age: 19,
    interest: ["Basketball", "Reading"],
    access: Access.MODERATOR,
};
// if (student.access === 1234) {
//   console.log("is admin");
// }
if (student.access === "admin") {
    console.log("is moderator");
}
