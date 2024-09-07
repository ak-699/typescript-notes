// type alias: existingType
// type Name = String;
// let firstName: Name;
// let lastName: Name;

// firstName = "abhishek";
// console.log(firstName);

type Person = {
  name: string;
  age: number;
};

// if i keep person as vairable name i get below error
// Cannot redeclare block-scoped variable 'person'.ts(2451)
// app.ts(15, 5): 'person' was also declared here.

let person1: Person = {
  name: "abhishek",
  age: 21,
};

console.log(person1);
