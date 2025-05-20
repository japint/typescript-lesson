// object type
const student: {
  name: string;
  age: number;
  gender?: string;
  interest: string[];
  access: [number, string];
} = {
  name: "Juan",
  age: 19,
  interest: ["Basketball", "Reading"],
  access: [1, "admin"],
};

console.log(student.gender);
