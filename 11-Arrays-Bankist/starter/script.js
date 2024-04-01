'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Display Movements
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

//console.log(containerMovements.innerHTML);

//Data transformation with Map, filter and reduce

// map returns a new array containing the results of applying an operation on all original array elements
// filter returns a new array containing the array elements that passed a specified test condition
// reduce boils down all array elements into a single value (e.g. adding all elements together)

//the map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//const eurToUsd = 1.2; //exchange rate from euros to usd

// const movementsUSEd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSEd = movements.map(movement => movement * eurToUsd);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// if (mov > 0) {
//   console.log(`Movement ${i + 1}: You deposited ${mov}`);
// } else {
//   console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// }

//Computing usernames

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inpputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accpints.findIndex(
      acc => acc.username === currentAccount.username
    );
    //Delete account
    account.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

const deposits = movements.filter(
  function (mov) {
    return mov > 0;
  } //returns a new array with all the positive values in the original array
);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
const withdrawals = movements.filter(mov => mov < 0); //returns a new array with all the negative values in the original array

//the reduce method
//accumulator -> SNOWBALL - it accumulates the value that we ultimately want to return
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0); //returns the sum of all the elements in the array

let balance2 = 0;
for (const mov of movements) balance2 += mov; // returns the sum of all the elements in the array

// // maxium value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// const eurToUsd = 1.2;
// console.log(movements);

// // Pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// const firstWithdrawal = movements.find(mov => mov < 0); // returns the first element that satisfies the condition
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Sarah Smith');
// console.log(account);

// console.log(movements);
// //Equality
// console.log(movements.includes(-130));
// //Some: Condition is true for at least one element in the array (returns true or false)
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0); //returns true if at least one element satisfies the condition
// console.log(anyDeposits);

// //EVERY

// console.log(movements.every(mov => mov > 0));

// // Seperate callback

// const depost = mov => mov > 0;
// console.log(movements.some(depost));
// console.log(movements.every(depost));
// console.log(movements.filter(depost));\

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
//console.log(arr.flat()); //flattens the array into a single dimension

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
//console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// //flatmap
// const overallBalance2 = accounts
//   .flatmap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// Sorting arrays

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

//console.log(owners.sort()); // sort method mutates the original array

const numbers = [3, 4, 2, 1, 6, 5];

//console.log(numbers.sort()); // sort method mutates the original array
// sort method mutates the original array
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
//console.log(movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);

//console.log(movements);
