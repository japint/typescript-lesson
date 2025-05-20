// custom type
enum Access {
  ADMIN = 1234,
  MODERATOR = "moderator",
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
