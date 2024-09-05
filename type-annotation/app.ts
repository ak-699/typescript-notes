// : type
// let name: string = "abhishek";

// For arrays
let names: string[] = ["abhishek", "pooja", "poonam", "prakash"];
console.log(names);

// Type 'string' is not assignable to type 'string[]'
// names = "hello";

// No error
names = ["abhishek", "kumar"];

// For objects
let person: {
  name: string;
  age: number;
};

person = {
  name: "abhishek",
  age: 21,
};

console.log(person);

// For functions

let greetings: (name: string) => string;

greetings = function (name: string) {
  return "hello " + name;
};
console.log(greetings("abhishek"));

// Type '() => number' is not assignable to type '(name: string) => string'.
//   Type 'number' is not assignable to type 'string'.
// greetings = () => {
//     return 2;
// }
