// const anchor = document.querySelector('a')!;
// console.log(anchor.href)
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Struan', 'tennis session', 50);
// docTwo = new Payment('Me', 'chauffeur services', 150);
// let docs: HasFormatter[] = [];
// docs.push(docOne, docTwo);
// console.log(docs)
// const invOne = new Invoice("rich", "good guy tax", 200);
// const invTwo = new Invoice("polly", "good girl tax", 250);
// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo);
// invoices.forEach(inv => {
//     console.log(inv.format())
//  })
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // define values as a tuple then use spread operator to pass these Invoice/Payment class objects
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, type.value === "invoice" ? "end" : "start");
    form.reset();
});
// interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'Rich',
//     age: 37,
//     speak(text: string) {
//         console.log(text)
//     },
//     spend(amount: number) {
//         console.log('You spent ', amount)
//         return amount;
//     }
// }
// const greetPerson = (person: IsPerson) => {
//     console.log("hello", person.name)
// }
// greetPerson(me)
// GENERICS
// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let newUser = addUID({ name: "richard", age: 40 });
// console.log(`${newUser.name}:`, newUser);
// with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<Payment> = {
//     uid: 100,
//     resourceName: 'person',
//     data: new Payment('richard', 'web design', 250)
// }
// const docFour: Resource<string[]> = {
//     uid: 100,
//     resourceName: 'person',
//     data: ['hello', 'world']
// }
// console.log(docThree, docFour)
// ENUMS
// enum ResourceType {
//   BOOK,
//   AUTHOR,
//   FILM,
//   DIRECTOR,
//   PERSON,
// }
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const newDoc: Resource<object> = {
//   uid: 101,
//   resourceType: ResourceType.FILM,
//   data: { title: "Adaptation", releaseYear: 2002, score: 90 },
// };
// TUPLES -- define types at each position in an array
// let arr = [
//   "rich",
//   25,
//   true,
// ]; /* standard array types not fixed at each position */
// let exampleTuple: [string, number, boolean] = ["me", 23, false];
