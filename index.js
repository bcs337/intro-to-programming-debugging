const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messagesContainer = document.getElementById('messages');
const guessDisplay = document.getElementById('guess-display');
const guessesRemaining = document.getElementById('guesses-remaining');
const feedback = document.getElementById('feedback');
const form = document.getElementById('guess-form');

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess(event) {
  event.preventDefault();
  
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;

  messagesContainer.style.display = 'block';

  guessDisplay.innerHTML = `You guessed: ${guess}`;
  
  const remainingAttempts = maxNumberOfAttempts - attempts;

  if (guess === targetNumber) {
    feedback.innerHTML = 'guessed correctly';
    guessesRemaining.innerHTML = '';
    submitButton.disabled = true;
    guessInput.disabled = true;
  } else if (attempts >= maxNumberOfAttempts) {
    feedback.innerHTML = `0 guesses remaining`;
    guessesRemaining.innerHTML = '';
    submitButton.disabled = true;
    guessInput.disabled = true;
  } else {
    guessesRemaining.innerHTML = `${remainingAttempts} guesses remaining`;
    
    if (guess < targetNumber) {
      feedback.innerHTML = 'too low';
    } else {
      feedback.innerHTML = 'too high';
    }
  }

  guessInput.value = '';
  resetButton.style.display = 'block';
}

function setup() {
  targetNumber = getRandomNumber(1, 101);
  console.log(`target number: ${targetNumber}`);

  attempts = 0;

  submitButton.disabled = false;
  guessInput.disabled = false;

  messagesContainer.style.display = 'none';
  resetButton.style.display = 'none';
  
  guessInput.value = '';
  guessDisplay.innerHTML = '';
  guessesRemaining.innerHTML = '';
  feedback.innerHTML = '';
}

form.addEventListener('submit', checkGuess);
resetButton.addEventListener('click', setup);

setup();