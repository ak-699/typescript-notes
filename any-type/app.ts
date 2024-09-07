// To opt out of type checking use any type
// For unknown data type coming from apis

let result: any;
result = 1;
console.log(result);

result = "abhishek";
console.log(result);

result = {
  name: "abhishek",
  age: 21,
};
console.log(result);

// If no type then default type is any
// This is called type inference
// Typescript infers type for you
// This is implicit typing

let num: any;
num = 10.23;
console.log(num.toFixed(1));
// No checking of error for a non existent method for a varable declared with type any
console.log(num.willExist());
