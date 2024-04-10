'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Project planning

// 1. User stories - description of the app from the user's perspective. All user stories put together describe the entire application.
// 2. Features - high-level overview of what the app will do.
// 3. Flowchart - visual representation of the app's logic.
// 4. Architecture - how the app will be structured.
// 5. Development - writing the code.

// User stories
//  Common format for user stories: As a [type of user], I want [an action] so that [a benefit].

// 1. As a user, I want to log my running workouts with location, distance, time, pace and steps/minute, so I can keep a record of all my running.
// 2. As a user, I want to log my cycling workouts with location, distance, time, speed and elevation gain, so I can keep a record of all my cycling.
// 3. As a user, I want to see all my workouts at a glance, so I can easily track my progress over time.
// 4. As a user, I want to also see my workouts on a map, so I can easily check where I worked out.
// 5. As a user, I want to see all my workouts when I leave the app and come back later, so that I can keep using the app over time.

// Features

// 1. Map where the user clicks to add a new workout.
// 2. Geolocation to display the map at the user's current location.
// 3. Form to input distance, time, pace, steps/minute, speed and elevation gain.
// 4. Display all workouts in a list.
// 5. Display all workouts on the map.
// 6. Store workout data in the browser using local storage API.
// 7. On page load, read the saved data from local storage and display.

// Flowchart

// Page loads -> Get location -> Load map -> Show map at location -> Click on map -> Show form -> Input data
