let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('.guessSubmit');
const userInput = document.querySelector('.guessField');
const guessLot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter valid number.');
  } else if (guess < 1) {
    alert('Please enter a number greater then 1.');
  } else if (guess > 100) {
    alert('Please enter a number less then 100.');
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMsg(`Game over, Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNum) {
    displayMsg('You guessed it right.');
    endGame();
  } else if (guess < randomNum) {
    displayMsg('Number is TOO low.');
  } else if (guess > randomNum) {
    displayMsg('Number is TOO high.');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessLot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id = "newGame">Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGuess = 1;
    guessLot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
