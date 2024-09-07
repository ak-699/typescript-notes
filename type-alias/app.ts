// type alias: existingType
// type Name = String;
// let firstName: Name;
// let lastName: Name;

// firstName = "abhishek";
// console.log(firstName);

// type Person = {
//   name: string;
//   age: number;
// };

// if i keep person as vairable name i get below error
// Cannot redeclare block-scoped variable 'person'.ts(2451)
// app.ts(15, 5): 'person' was also declared here.

// let person1: Person = {
//   name: "abhishek",
//   age: 21,
// };

// console.log(person1);

// Union types
// type alphanumeric = string | number;
// let input: alphanumeric;
// input = 21;
// console.log(input);
// input = "abhishek";
// console.log(input);

// Intersection types
type Person = {
  name: String;
  age: number;
};

type Contact = {
  email: String;
  contact: String;
};

type Information = Person & Contact;

let personInformation: Information = {
  name: "abhishek",
  age: 21,
  email: "abhishek@gmail.com",
  contact: "+123456789",
};

console.log(personInformation);
