'use strict';

/*
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
let secretNumber = document.querySelector('.number').textContent;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //when guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }

    //when guess too low
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      document.querySelector('.score').textContent = score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }

  //score
});
