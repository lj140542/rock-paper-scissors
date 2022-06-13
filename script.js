const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
var playerScore = 0;
var computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    playRound(button.textContent.toUpperCase(), computerPlay());
}));


function computerPlay() {
    var rand = Math.floor(Math.random() * 3);
    return CHOICES[rand];
};

function playRound(player, computer) {
    switch (player) {
        case 'ROCK':
            switch (computer) {
                case 'ROCK':
                    result = 'Draw!';
                    break;
                case 'PAPER':
                    result = 'You lose! Paper beats Rock';
                    computerScore++;
                    break;
                case 'SCISSORS':
                    result = 'You win! Rock beats Scissors';
                    playerScore++;
                    break;
            }
            break;
        case 'PAPER':
            switch (computer) {
                case 'ROCK':
                    result = 'You win! Paper beats Rock';
                    playerScore++;
                    break;
                case 'PAPER':
                    result = 'Draw!';
                    break;
                case 'SCISSORS':
                    result = 'You lose! Scissors beats Paper';
                    computerScore++;
                    break;
            }
            break;
        case 'SCISSORS':
            switch (computer) {
                case 'ROCK':
                    result = 'You lose! Rock beats Scissors';
                    computerScore++;
                    break;
                case 'PAPER':
                    result = 'You win! Scissors beats Paper';
                    playerScore++;
                    break;
                case 'SCISSORS':
                    result = 'Draw!';
                    break;
            }
            break;
        default:
            result = 'Your choice is not recognized';
            break;
    }

    // Shows the result in the div with the 'result' id 
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
};

function reset() {
    playerScore = 0;
    computerScore = 0;
};