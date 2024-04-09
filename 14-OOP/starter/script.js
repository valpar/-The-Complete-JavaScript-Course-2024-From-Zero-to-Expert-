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

// inheritance between classes: ES6 classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName}, I am ${this.age} years old and I study ${this.course}`
    );
  }

  calcAge() {
    console.log(
      `I am ${2024 - this.birthYear} years old, but as a student I feel like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2001, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();


// inheritance between classes: Object.create

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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (name, birthYear, course) {
  PersonProto.init.call(this, name, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 1996, 'Computer Science');
jay.introduce();
jay.calcAge();
*/
// another class example

// Encapsulation: Private class fields and methods
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods

class Account {
  // 1. Public fields (instances) - public instance fields. Referenced by the this keyword.
  locale = navigator.language;

  // 2. Private fields - private instance fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected propert
    this.#pin = pin;
    // this.#movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3. Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  // 4. Private methods
  #approveLoan(val) {
    //no support for private methods yet
    return true;
  }
}

const acc1 = new Account('Valmar', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
// console.log(acc1);

acc1.deposit(300);
acc1.withdraw(400);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);

// Encapsulation: Protected properties and methods

//Chaining methods - return this

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
console.log(acc1.getMovements());

//ES6 classes summary

// 1. Classes are syntactic sugar for constructor functions.
// 2. Classes are NOT hoisted.
// 3. Classes are first-class citizens.
// 4. Classes are executed in strict mode.
// 5. Classes do NOT have private data.
// 6. Public methods are added to .prototype property.
// 7. Static methods are defined on the class.
// 8. Classes can inherit from other classes.
