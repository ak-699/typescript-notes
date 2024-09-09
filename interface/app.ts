// function greetUser(person: { name: string; age: number }) {
//   console.log("Hi ", person.name, " ", person.age);
// }

// greetUser({ name: "abhishek", age: 21 });

// namespace PersonNamespace {
//   export interface Person {
//     firstName: string;
//     lastName: string;
//   }
// }

// function greetUser(person: PersonNamespace.Person) {
//   console.log(person);
// }
// let user: PersonNamespace.Person = {
//   firstName: "abhishek",
//   lastName: "kumar",
// };
// greetUser(user);

// Optional Properties
// To make a property optional in a object put a question mark
// interface Dog {
//   firstName: String;
//   lastName: String;
//   middleName?: string;
// }

// function getFullName(dog: Dog) {
//   console.log(dog);
// }

// getFullName({ firstName: "Tony", lastName: "Stark", middleName: "fucking" });

// Read only properties
// Property cannot be changed once assigned

interface Dog {
  readonly sno?: number;
  firstName: String;
  lastName: String;
}

function getFullName(dog: Dog) {
  console.log(dog);
}

let myDog: Dog = {
  firstName: "tony",
  lastName: "stark",
};
console.log(myDog);
// Cannot assign to 'sno' because it is a read-only property.
// myDog.sno = 2;
// console.log(myDog)
