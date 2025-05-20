// object type
const student: {
  name: string;
  age: number;
  gender?: string;
  interest: string[];
  favoriteNumbers: number[];
  stringAndNumber: any[];
} = {
  name: "Juan",
  age: 19,
  interest: ["Basketball", "Reading"],
  favoriteNumbers: [1, 31],
  stringAndNumber: ["Bob", 1],
};

console.log(student.gender);
