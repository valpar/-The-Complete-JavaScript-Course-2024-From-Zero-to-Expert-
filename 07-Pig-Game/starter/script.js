'use strict';

// Selecting elements
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const player1Name = document.getElementById('name--0');
const player2Name = document.getElementById('name--1');
const dice = document.querySelector('.dice');

// Starting conditions
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');
