/*
////////////////////////////////////
// Linking a JavaScript File
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log('Jonas');
console.log(23);

let firstName = 'Valmar';
let dreamJob = 'Frontend developer';
let currentJob = 'Service desk engineer';

console.log(
  'My name is: ' +
    firstName +
    ' and my dream job is, ' +
    dreamJob +
    ' but currently my position is: ' +
    currentJob
);


// Number
let age = 27;

// String

let pet = 'cat';

// Boolean

let isMotivated = true;

// Undefined

let x;

// Null

let nothing = null;

// Symbol

let sym = Symbol('foo');

// BigInt

let bigInt = 1234567890123456789012345678901234567890n;


const now = 2023;
const ageValmar = now - 2011;
const ageMike = now - 2001;
console.log(ageValmar, ageMike);

console.log(ageValmar * 2, ageValmar / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Valmar";
const lastName = "Nunes";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageValmar > ageMike); // >, <, >=, <=
console.log(ageMike >= 18);

const isFullAge = ageMike >= 18;

console.log(now - 1991 > now - 2040);

const now = 2023;
const ageValmar = now - 1996;
const ageHelena = now - 2001;

console.log(now - 1991 > now - 2020); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

const averageAge = (ageValmar + ageHelena) / 2;
console.log(ageHelena, ageValmar);
console.log(averageAge);
*/

const firstName = "Valmar";
const job = "Service desk engineer";
const birthYear = 1996;
const year = 2023;

const valmar =
  "I'm " +
  firstName +
  ", a " +
  (2023 - birthYear) +
  " years old and my job title is " +
  job +
  ".";

console.log(valmar);

const valmarNew = `I'm ${firstName}, a ${
  year - birthYear
} years old and my job title is ${job}.`;
console.log(valmarNew);
