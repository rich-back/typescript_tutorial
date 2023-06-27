"use strict";
let character = "rich";
let age = 37;
let isCoolDude = true;
const circ = (diameter) => {
    return (diameter * Math.PI).toFixed(3);
};
console.log(circ(120));
// ARRAYS
let names = ["rich", "stru", "peter"];
// names.push(true);
names.push("polly");
let numbers = [12, 15, 16];
// numbers.push('23')
numbers.push(23);
let mixedArr = ["rich", 37, "polly", 36];
mixedArr.push("12", 12);
// EXPLICIT TYPES
let person;
let size;
let isLoggedIn;
person = "me";
isLoggedIn = false;
// arrays
let ninjas = []; //type defined and then initialised as an empty array
ninjas.push("rich");
// UNION TYPES
let mixed = [];
mixed.push("polly", 36, false);
// union type variable
let userId;
userId = 123;
userId = "123";
// objects
let friend;
friend = {
    name: "nic",
    age: 35,
    isCool: true,
};
let enemy;
enemy = {
    name: "dickhead",
    age: 25,
    isCool: "false",
};
// DYNAMIC TYPES (ANY) **USE WITH CAUTION**
let quantity = 24;
quantity = true;
quantity = { name: "rich" };
quantity = [1, 2, 3];
let anyArr = [];
anyArr.push(12, "world", true, { name: "rich" }, [1, 2, 3]);
console.log(anyArr);
// FUNCTION TYPE
let greet;
greet = () => {
    console.log("hello");
};
const add2or3Numbers = (a, b, c) => {
    // c?: number (optional parameter, denoted by '?')
    if (!c) {
        return a + b;
    }
    else {
        return a + b + c;
    }
};
console.log(add2or3Numbers(3, 3));
console.log(add2or3Numbers(3, 3, 3));
const add = (a, b, c = 10) => {
    // you can give the optional parameter a default value
    console.log(a + b + c);
};
add(5, 10);
add(1, 2, 3);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} says hello!`);
};
// FUNCTION SIGNATURES
// example 1
let greet1;
greet1 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(5, 5, 'add'));
