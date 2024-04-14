'use strict';

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

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude];

      map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();

        console.log(mapEvent);
      });
    },
    function () {
      alert('Please enable geolocation!');
    }
  );

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Clear input fields
  inputDistance.value =
    inputCadence.value =
    inputDuration.value =
    inputElevation.value =
      '';

  // display markergit
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

//Project architecture
// Parent class - Workout
// Child classes - Running and Cycling
// Running and Cycling classes will have their own properties and methods that are unique to each type of workout.
// Class App will be responsible for managing all workouts.
// It should have methods to add a new workout, render all workouts, move to a marker on the map, etc.
