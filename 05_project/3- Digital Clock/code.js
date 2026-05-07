// Select the clock element by ID
const clock = document.getElementById('clock');

// Alternate way to select element
// const clock = document.querySelector('#clock');

// setInterval runs the function again and again after given time
setInterval(function () {

  // Create new Date object (gives current date and time)
  let date = new Date();

  // Convert date into readable local time string
  // Example: 2:19:17 PM
  let currentTime = date.toLocaleTimeString();

  // Display time inside clock div
  clock.innerHTML = currentTime;

}, 1000); // 1000 milliseconds = 1 second
