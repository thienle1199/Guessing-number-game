/* 
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
-Let player choose to play again
*/
// Game values
let min = 1,
    max = 10,
    winningNum = getRanDomNum(min, max),
    guessesLeft = 3;
// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),    
      maxNum = document.querySelector('.max-num'),    
      guessBtn = document.querySelector('#guess-btn'),    
      guessInput = document.querySelector('#guess-input'),    
      message = document.querySelector('.message');
// Assign UI min and max
minNum.textContent = min;      
maxNum.textContent = max;      

guessBtn.addEventListener('click', function () {
  guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`, 'red');
    guessInput.value = '';
  } else if (guess === winningNum) {
    setMessage(`${guess} is correct, YOU'VE WON 1 million dollars`, 'green');
    gameOver();
  } else {
    guessesLeft -= 1;
    if (guessesLeft > 0) {
      setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left`, 'red')
      guessInput.value = '';
    } else {
      setMessage(`You're out of luck, the correct number is ${winningNum}`, 'red');
      gameOver();
    }
  } 
})

function getRanDomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}   

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;
}


function gameOver() {
  guessInput.disabled = true;
  guessBtn.textContent = 'Play again';
  guessBtn.addEventListener('click', function () {
    window.location.reload();
  })
}
