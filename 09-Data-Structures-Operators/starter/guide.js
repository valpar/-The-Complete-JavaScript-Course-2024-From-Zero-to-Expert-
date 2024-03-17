//Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a); // 2

const [x, y, z] = arr;
console.log(x); // 2

//Destructuring objects
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const { name, categories: catList, openingHours } = restaurant;
console.log(name, catList, openingHours);

//The spread operator

const arr2 = [7, 8, 9];
const x2 = [1, ...arr, 2];
console.log(x); // [1, 7, 8, 9, 2]

//Rest pattern and Parameters

const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others); // 1 2 [3, 4, 5]

//Short circuiting (&& and ||)

console.log('----OR----');
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas

console.log('----AND-----');
console.log(3 && 'Jonas'); // Jonas
console.log('' && 'Jonas'); // ''

//Nullish coalescing operator (??)
let a3 = null;
let b3 = 0;
let c3 = undefined;
let d3 = '';
console.log(a3 || 'Default value'); // Default value
console.log(b3 ?? 'Default'); // 0
console.log(c3 ?? 'Default'); // Default
console.log(d3 ?? 'Default'); // ''

//Logical assignment operators
let guests = restaurant.numGuests || 10;
let foodType = restaurant.typeOfCuisine || 'Italian';
console.log(guests, foodType); // 10 Italian

//Looping arrays the for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

//Enhanced object literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const daysOff = [];
for (const day of weekdays) {
  daysOff.push(day);
}
console.log(daysOff);

//Optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

//Looping objects
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
