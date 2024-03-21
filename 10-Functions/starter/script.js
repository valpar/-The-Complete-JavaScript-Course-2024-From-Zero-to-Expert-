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
