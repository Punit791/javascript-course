// Select the form element
const form = document.querySelector('#bmiForm');

// Add submit event on form
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Page reload ko stop karta hai

  // Get height input value
  const height = parseInt(document.querySelector('#height').value);

  // Get weight input value
  const weight = parseInt(document.querySelector('#weight').value);

  // Result div
  const results = document.querySelector('#results');

  // Height validation
  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  }

  // Weight validation
  else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
  }

  // BMI calculation
  else {
    // BMI Formula
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message = `Your BMI is: ${bmi} <br>`;

    // BMI category check
    if (bmi < 18.6) {
      message += "You are Under Weight";
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
      message += "You are in Normal Range";
    }
    else {
      message += "You are Overweight";
    }

    // Show result on screen
    results.innerHTML = message;
  }
});
