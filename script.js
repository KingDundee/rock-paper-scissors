// script for index.html

let computerScore = 0;
let playerScore = 0;

const selectArray = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return selectArray[Math.floor(Math.random() * selectArray.length)];
}

function getPlayerChoice() {
  let playerSelection;
  let loopSentry = true;
  // HANDLE the null (Cancel) and (empty string OK) cases
  while (loopSentry) {
    playerSelection = prompt("Please ENTER 'Rock', 'Paper', or 'Scissors' to PLAY!");
    if (playerSelection === null || playerSelection === "") {
      console.log("Please make a selection!");
      continue;
    }
    else {
      playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
      if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
        break; // or SET loopSentry false
      }
      else {
        console.log("Please try entering again!");
        continue;
      }
    }
  }
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      ++computerScore;
      return 'You lose! Paper beats Rock!';
    }
    else if (computerSelection === 'Scissors') {
      ++playerScore;
      return 'You win! Rock beats Scissors!';
    }
    else {
      return "It's a tie!";
    }    
  }
  else if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      ++playerScore;
      return 'You win! Paper beats Rock!';
    }
    else if (computerSelection === 'Scissors') {
      ++computerScore;
      return 'You lose! Scissors beats Paper!';
    }
    else {
      return "It's a tie!";
    }    
  }
  else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      ++computerScore;
      return 'You lose! Rock beats Scissors!';
    }
    else if (computerSelection === 'Paper') {
      ++playerScore;
      return 'You win! Scissors beats Paper!';
    }
    else {
      return "It's a tie!";
    }    
  }
}