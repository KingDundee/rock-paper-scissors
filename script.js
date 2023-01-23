// script for index.html

let computerScore = 0;
let playerScore = 0;

const selectArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return selectArray[Math.floor(Math.random() * selectArray.length)];
}

function playRound(playerSelection, computerSelection) {
  computerSelectionMessage.textContent = `Computer Choice: ${computerSelection}`;
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      computerScore++;
      return 'You LOSE! Paper beats Rock!';
    }
    else if (computerSelection === 'scissors') {
      playerScore++;
      return 'You WIN! Rock beats Scissors!';
    }
    else {
      return "It's a TIE!";
    }    
  }
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return 'You WIN! Paper beats Rock!';
    }
    else if (computerSelection === 'scissors') {
      computerScore++;
      return 'You LOSE! Scissors beats Paper!';
    }
    else {
      return "It's a TIE!";
    }    
  }
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      return 'You LOSE! Rock beats Scissors!';
    }
    else if (computerSelection === 'paper') {
      playerScore++;
      return 'You WIN! Scissors beats Paper!';
    }
    else {
      return "It's a TIE!";
    }    
  }
}

const computerSelectionMessage = document.querySelector('.opponents.computer p');
const playerSelectionMessage = document.querySelector('.opponents.human p');

const resultMessage = document.querySelector('main p.result-message');

const computerScoreMessage = document.querySelector('main div.computer-score');
const playerScoreMessage = document.querySelector('main div.player-score');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function(event) {
    playerSelectionMessage.textContent = "Human Choice: ";
    resultMessage.textContent = playRound(event.target.id, getComputerChoice());
    playerSelectionMessage.textContent += ` ${event.target.id}`;
    computerScoreMessage.textContent = `Computer Score: ${computerScore}`;
    playerScoreMessage.textContent = `Human Score: ${playerScore}`;

    if (computerScore === 5) {
      resultMessage.textContent = "Computer WINS the game!";
      computerScore = 0;
      playerScore = 0;
    } else if (playerScore === 5) {
      resultMessage.textContent = "Human WINS the game!";
      computerScore = 0;
      playerScore = 0;
    } else if (computerScore === 5 && playerScore === 5) {
      resultMessage.textContent = "The game is a TIE!";
      computerScore = 0;
      playerScore = 0;
    }
  });
});