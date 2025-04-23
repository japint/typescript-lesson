enum Access {
  ADMIN = 1234,
  MODERATOR = "admin",
  USER = 1111,
}
const student: {
  name: string;
  age: number;
  gender?: string;
  interest: string[];
  access: Access;
} = {
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
