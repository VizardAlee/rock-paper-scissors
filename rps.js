/* 
    rock-paper-scissors!

    First create a function that defines the interraction between the 3 elements
    1. rock beats scissors
    2. scissors beats paper
    3. paper beats rock
*/

//Following TOP's provided steps, I set up the computerPlay Expression

// Declare a Global Variable
const rps = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomPlay = rps[Math.floor(Math.random() * rps.length)];
    return randomPlay;
}

//console.log(computerPlay());

// Write a function that creates a single round of rps

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    let result = "";
    if ((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') ||
        (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') ||
        (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')) {
            playerScore += 1;
            result = alert(`You win! ${playerSelection} beats ${computerSelection}! 
            Player ${playerScore} Computer ${computerScore}`);


    } else if(  (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') ||
                (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') ||
                (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock')) {
                computerScore += 1;
                result = alert(`You lose! ${computerSelection} beats ${playerSelection}!
                Player ${playerScore} Computer ${computerScore}`);


    } else if(playerSelection.toLowerCase() == computerSelection) {
        result = alert(`It's a tie! you both chose ${computerSelection}`);
    } else {
        result = alert(`It can't be ${playerSelection}`);
    }
    return result
    
    
    

}

 const round = playRound(playerSelection);
 function game() {
    for (let i = 0; i < 5; i++) {
        round += i;
    }
    return round;
 }
 game();

 