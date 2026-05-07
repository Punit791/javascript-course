// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Select elements
const guessField = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// Game variables
let guessCount = 1;
let remainingGuesses = 10;
let playGame = true;

// If game is active
if (playGame) {
  submit.addEventListener('click', function () {
    const userGuess = Number(guessField.value);
    validateGuess(userGuess);
  });
}

// Validate user input
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } 
  else if (guess < 1) {
    alert("Number should be greater than 0");
  } 
  else if (guess > 100) {
    alert("Number should be less than or equal to 100");
  } 
  else {
    previousGuesses(guess);
    checkGuess(guess);
  }
}

// Show previous guesses
function previousGuesses(guess) {
  guesses.innerHTML += `${guess} , `;
  remainingGuesses--;
  lastResult.innerHTML = remainingGuesses;
  guessField.value = '';
}

// Check guess logic
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed it right! Number was ${randomNumber}`);
    endGame();
  } 
  else if (remainingGuesses === 0) {
    displayMessage(`😢 Game Over! Number was ${randomNumber}`);
    endGame();
  } 
  else if (guess < randomNumber) {
    displayMessage("📉 Too low! Try again");
  } 
  else if (guess > randomNumber) {
    displayMessage("📈 Too high! Try again");
  }
}

// Show message on screen
function displayMessage(message) {
  lowOrHi.innerHTML = message;
}

// End game logic
function endGame() {
  guessField.disabled = true;
  submit.disabled = true;
  playGame = false;
}
