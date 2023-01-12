// script for index.html
// INITIALIZE scores
let computerScore = 0;
let playerScore = 0;
// SET selectArray for getComputerChoice()
const selectArray = ['Rock', 'Paper', 'Scissors'];
// GET computer selection with getComputerChoice()
function getComputerChoice() {
  return selectArray[Math.floor(Math.random() * selectArray.length)];
}
/*
console.log(typeof getComputerChoice());  // TEST
console.log(getComputerChoice());  // TEST
console.log(typeof computerScore);  // TEST
console.log(typeof playerScore);  // TEST
*/

// GET player selection with getPlayerChoice()
function getPlayerChoice() {
  let playerSelection;
  let loopSentry = true;
  // HANDLE the null (Cancel) and (empty string OK) cases
  while (loopSentry) {
    playerSelection = prompt("Please ENTER 'Rock', 'Paper', or 'Scissors' to PLAY!");
    if (playerSelection === null || playerSelection === "") {
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
// console.log(getPlayerChoice());  // TEST

// PLAY single round and declare winner & loser based on player & computer inputs
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
// console.log(playRound(getPlayerChoice(), getComputerChoice()));  // TEST

// PLAY 5 consecutive rounds and keep score, declaring winner of each round and end of game

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`Player score: ${playerScore} VS. Computer score: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("You win the game!");
  }
  else if (playerScore < computerScore) {
    console.log("You lost the game!");
  }
  else {
    console.log("The game is a tie!");
  }
}
// TEST game
game();