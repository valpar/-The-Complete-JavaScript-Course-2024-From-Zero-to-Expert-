'use strict';

// Default Parameters

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const valmar = {
  name: 'Valmar',
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, valmar);
// console.log(flight);
// console.log(valmar);

// is the same as doing...
// const flightNum = flight;
// const passenger = valmar;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(valmar); // two objects pointing to the same object in memory
console.log(valmar);

// First-Class and Higher-Order Functions

/*
First Class Functions
- JavaScript treats functions as first-class citizens
- This means that functions are simply values
- Functions are just another "type" of object
- Store functions in variables or properties
- Pass functions as arguments to other functions
- Return functions from other functions
- Call methods on functions

Higher Order Functions
- A function that receives another function as an argument, that returns a new function, or both
- This is only possible because of first-class functions
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Valmar', 'Marcelo', 'Lucas'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); // greet function is called and returns a new function
greeterHey('Valmar');
greeterHey('Marcelo');

greet('Hello')('Valmar');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const Lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}` // this keyword points to the object that is calling the method
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

Lufthansa.book(239, 'Valmar');
Lufthansa.book(635, 'Lucas');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const flightBooking = Lufthansa.book; // does not work because the this keyword is undefined

//Does not work
//flightBooking(24, 'Sebastian');

//Call method
flightBooking.call(eurowings, 24, 'Sebastian'); //call method allows us to set the this keyword explicitly

flightBooking.call(Lufthansa, 239, 'Valmar');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

flightBooking.call(swiss, 583, 'Mary');

// Apply method
const flightData = [583, 'George'];
flightBooking.apply(swiss, flightData); // does not work anymore because we have lost the context of "this" keyword

flightBooking.call(swiss, ...flightData);
