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


const age = 23;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Valmar can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Valmar is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1996;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Valmar")); //NaN = Not a Number
console.log(typeof NaN); //Not a number is a number type

console.log(String(23), 23);

//Type coercion
console.log("I am " + 27 + " years old"); //Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).
console.log("23" - "10" - 3); //10
console.log("23" + "10" + 3); //23103
console.log("23" * "2"); //46
console.log("23" / "2"); //11.5
console.log("23" > "18"); //true

let n = "1" + 1; //11
n = n - 1; //10
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Valmar")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 0;
if (money) {
  //money is a falsy value and if else tries to convert it to a boolean value
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
*/

// Logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const canAffordCarInsurance = false;

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

/* if (hasDriversLicense && hasGoodVision) {
  console.log('Valmar is able to drive.');
} else {
  console.log('Someone else should drive');
} */

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired); //true

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Valmar is able to drive.');
} else {
  console.log('Someone else should drive');
}
