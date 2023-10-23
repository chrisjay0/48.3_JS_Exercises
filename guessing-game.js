function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 100);
    let guesses = 0;
    let hasWon = false;

    return function(guess) {
        if (hasWon) {
            return "The game is over, you already won!";
        }
        
        guesses++;
        
        if (guess === randomNumber) {
            hasWon = true;
            return `You win! You found ${randomNumber} in ${guesses} guesses.`;
        } else if (guess > randomNumber) {
            return `${guess} is too high!`;
        } else {
            return `${guess} is too low!`;
        }
    };
}


module.exports = { guessingGame };
