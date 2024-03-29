// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultDogs = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adultDogs);

  const calcAverage =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  //2 3. (2+3)/2 = 2.5 === 2/2 + 3/2 = 2.5

  return calcAverage;
};

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(
  'Test Data 1 Average: ',
  calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
);
