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

/* --------------------------- Optional Properties -------------------------- */
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

/* -------------------------- Read only properties -------------------------- */
// Property cannot be changed once assigned

// interface Dog {
//   readonly sno: number;
//   firstName: String;
//   lastName: String;
// }
// Can combine readonly and ?

// function getFullName(dog: Dog) {
//   console.log(dog);
// }

// let myDog: Dog = {
//   sno: 1,
//   firstName: "tony",
//   lastName: "stark",
// };
// console.log(myDog);
// Cannot assign to 'sno' because it is a read-only property.
// myDog.sno = 2;
// console.log(myDog)

/* ----------------------------- Function Types ----------------------------- */
// interface Dog {
//   (a: String, b: number): string;
// }

// let myDog: Dog;
// myDog = (name: String, age: number) => {
//   return name + `${age}`;
// };
// let anotherDog:Dog = (name: String) => {
//   return "Bow...";
// }
// Expected 2 arguments, but got 1.
// console.log(anotherDog("Toney"));
// console.log(anotherDog("Tony", 21));

/* ------------------------------- Class Types ------------------------------ */

// interface Json {
//   toJson(): String;
// }

// class Dog implements Json {
//   constructor(private name: String, private age: number) {}
//   toJson(): String {
//     return JSON.stringify(this);
//   }
// }

// let myDog = new Dog("Tony", 21);
// console.log(myDog.toJson());
