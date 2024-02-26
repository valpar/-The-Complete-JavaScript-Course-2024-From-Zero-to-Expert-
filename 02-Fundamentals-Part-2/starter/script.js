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
*/

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
