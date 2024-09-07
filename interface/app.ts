// function greetUser(person: { name: string; age: number }) {
//   console.log("Hi ", person.name, " ", person.age);
// }

// greetUser({ name: "abhishek", age: 21 });

namespace PersonNamespace {
  export interface Person {
    firstName: string;
    lastName: string;
  }
}

function greetUser(person: PersonNamespace.Person) {
  console.log(person);
}
let user: PersonNamespace.Person = {
  firstName: "abhishek",
  lastName: "kumar",
};
greetUser(user);
