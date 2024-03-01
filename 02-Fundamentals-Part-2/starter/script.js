'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';


// Functions

function logger() {
  console.log('My name is Valmar');
}

logger(); // calling / running / invoking function

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuiice = fruitProcessor(17, 8);
console.log(applejuiice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1996);

console.log(age1, age2);


//arrow function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1996, 'Valmar'));
console.log(yearsUntilRetirement(1972, 'Madli'));
 

// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (firstName, birthYear) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement('Valmar', 1996));
console.log(yearsUntilRetirement('Mike', 1950));


// Introduction to Arrays

const friend1 = 'Sander';
const friend2 = 'Steven';
const friend3 = 'Jaanus';

const friends = ['Sander', 'Steven', 'Jaanus'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 2]);

friends[3] = 'Jay';
console.log(friends);

const firstName = 'Valmar';
const Valmar = [firstName, 'Mets', 2024 - 1996, 'student', friends];

console.log(Valmar);
console.log(Valmar.length);

// Exercise

function calcAge(birthYear) {
  return 2024 - birthYear;
}

const years = [1992, 1957, 2012, 2021, 2008];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);


const friends = ['Sander', 'Steven', 'Jaanus'];
//add elements
const newLength = friends.push('Mark'); //adds element to the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('Wilhelm'); //adds element to the beginning of the array
console.log(friends);

//remove elements
friends.pop(); //removes last element of the array
console.log(friends);

friends.shift(); //removes first element of the array
console.log(friends);

console.log(friends.indexOf('Steven')); //returns the index of the element
console.log(friends.indexOf('Bob')); //returns -1 if the element is not in the array

console.log(friends.includes('Steven')); //returns true or false if the element is in the array
console.log(friends.includes('Bob')); //returns true or false if the element is in the array

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
} else {
  console.log("You don't have a friend called Steven");
}

//intro to objects
const valmar = {
  firstName: 'Valmar',
  lastName: 'Parts',
  age: 27,
  job: 'Service desk engineer',
  friends: ['Sander', 'Laura', 'Ants'],
};

console.log(valmar);
console.log(valmar.age);
console.log(valmar['job']);

const nameKey = 'Name';
console.log(valmar['first' + nameKey]);
console.log(valmar['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Valmar? Choose between firstName, lastName, age, job, and friends'
);
console.log(valmar[interestedIn]);

if (valmar[interestedIn]) {
  console.log(valmar[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  );
}

valmar.location = 'Estonia';
valmar['instagram'] = '@vaaalmar';
console.log(valmar);

// Challenge
// "Valmar has 3 friends, and his best friend is called Sander"

console.log(
  `${valmar.firstName} has ${valmar.friends.length} friends, and his best friend is called ${valmar.friends[0]}.`
);


const valmar = {
  firstName: 'Valmar',
  lastName: 'Parts',
  birthYear: 1996,
  job: 'Service desk engineer',
  friends: ['Sander', 'Laura', 'Ants'],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    console.log(this);
    return 2024 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

console.log(valmar.calcAge());
//console.log(valmar['calcAge'](1996));

// Challenge

//valmar is a 27-year old service desk engineer, and he has a driver's license

console.log(valmar.getSummary());

console.log(
  `${valmar.firstName} is a ${valmar.calcAge()}-year old ${
    valmar.job
  }, and he has ${valmar.hasDriversLicense ? 'a' : 'no'} driver's license`
);


//For loop

// console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');
// console.log('Lifting weights repetition 5 🏋️‍♂️');
// console.log('Lifting weights repetition 6 🏋️‍♂️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}


const valmarArray = [
  'Valmar',
  'Parts',
  2024 - 1996,
  'Service desk engineer',
  ['Sander', 'Laura', 'Ants'],
  true,
];

const types = [];

for (let i = 0; i < valmarArray.length; i++) {
  console.log(valmarArray[i]);
  //Filling types array
  //types[i] = typeof valmarArray[i];
  types.push(typeof valmarArray[i]);
}

console.log(types);

const years = [1996, 2006, 1972, 1968];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

console.log(ages);

//continue and break
console.log('---ONLY STRINGS---');
for (let i = 0; i < valmarArray.length; i++) {
  if (typeof valmarArray[i] !== 'string') continue;
  console.log(valmarArray[i], typeof valmarArray[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < valmarArray.length; i++) {
  if (typeof valmarArray[i] === 'number') break;
  console.log(valmarArray[i], typeof valmarArray[i]);
}
*/
