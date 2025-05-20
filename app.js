// custom type
var Access;
(function (Access) {
    Access[Access["ADMIN"] = 1234] = "ADMIN";
    Access["MODERATOR"] = "moderator";
    Access[Access["USER"] = 1111] = "USER";
})(Access || (Access = {}));
var student = {
    name: "Juan",
    age: 19,
    interest: ["Basketball", "Reading"],
    access: Access.ADMIN,
    // access: Access.MODERATOR,
    // access: Access.USER,
};
if (student.access === 1234) {
    console.log("is admin");
}
// if (student.access === Access.MODERATOR) {
//   console.log("is moderator");
// }
// if (student.access === 1111) {
//   console.log("is user");
// }
// using index
// enum Access {
//   ADMIN,
//   MODERATOR,
//   USER,
// }
// if (student.access === 1) {
//   console.log("is moderator");
// }
