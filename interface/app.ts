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
interface Dog {
  firstName: String;
  lastName: String;
  middleName?: string;
}

function getFullName(dog: Dog) {
  console.log(dog);
}

getFullName({ firstName: "Tony", lastName: "Stark", middleName: "fucking" });
