'use strict';

// what is object oriented programming?
// OOP is a programming paradigm based on the concept of objects, which can contain data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).
// we use objects to model (describe) real-world or abstract features.
// objects can contain data (properties) and code (methods).
// in OOP objects are self contained pieces/blocks of code that can be reused.
// objects are building blocks of applications, and interact with one another.
// interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object.
// OOP was developed to make code more flexible, easier to understand, and easier to maintain.

// 4 principles of OOP
// 1. Abstraction - ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't matter to the current level of abstraction.
// 2. Encapsulation - keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).
// 3. Inheritance - making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
// 4. Polymorphism - a child class can overwrite a method it inherited from a parent class. It's useful to implement different behavior for different classes, using the same method name.

// OOP in JavaScript
// JavaScript is a multi-paradigm language that supports OOP.
// ES6 introduced classes, making it easier to write object-oriented code.
// JavaScript classes are "syntactic sugar" over the existing prototype-based inheritance.
// JavaScript classes are constructor functions with a prototype property.
// JavaScript classes are first-class functions.

// constructor functions and the new operator
/*
const Person = function (firstName, birthYear) {
  //console.log(this);
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2021 - this.birthYear);
  };
};
const valmar = new Person('Valmar', 1996);
console.log(valmar);
// 1. New empty object {} is created.
// 2. Function is called, this = {}
// 3. {} linked to prototype.
// 4. Function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// prototypes

Person.prototype.calcAge = function () {
  // this is the prototype of the Person object
  console.log(2021 - this.birthYear);
};
valmar.calcAge();
matilda.calcAge();

console.log(valmar.__proto__);
console.log(valmar.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(valmar));

Person.prototype.species = 'Homo sapiens';
console.log(valmar.species);

console.log(valmar.hasOwnProperty('firstName'));
console.log(valmar.hasOwnProperty('species'));

//prototypal inheritance and the prototype chain

//prototypal inheritance on built in objects

console.log(valmar.__proto__);
console.log(valmar.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.createElement('h1');

// ES6 classes

//class expression
//const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2050 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 2020);
console.log(jessica);
jessica.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode


//Getters and Setters

const account = {
  owner: 'Valmar',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2050 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2050 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey there');
  }
}

const jessica = new PersonCl('Jessica Forest', 2020);
console.log(jessica);
console.log(jessica.age);

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

// object.create

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/
// inheritance between classes: constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // this doesn't work because it's not a constructor function
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // this is the correct way to inherit from Person

// Student.prototype.constructor = Student;
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 1996, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
