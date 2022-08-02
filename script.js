// Rock, Paper, Scissors. to be played in the browser console for now.

// Function to randomly generate computer game choice.
function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    return choices [Math.floor(Math.random() * choices.length)];
}


// Game play function.

function game() {

        let computerSelection = getComputerChoice();
        let playerSelection = promt("Choose an option between rock, paper or scissors: ");
        let userSelection = userChoice.toLowerCase();

    if (userSelection === computerSelection) {
        result = "Tie!";
        alert(result = "Tie!");
    }

    else if (userSelection === 'rock' && computerSelection === 'paper') {
        result = "Computer Wins!";
        alert(result = "Player Wins!");
    }

    else if (userSelection === 'rock' && computerSelection === 'scissors') {
        result = "Player Wins!";
        alert(result = "Player Wins!");
    }

    else if (userSelection === 'paper' && computerSelection === 'rock') {
        result = "Player Wins!";
        alert(result = "Player Wins!");
    }

    else if (userSelection === 'paper' && computerSelection === 'scissors') {
        result = "Computer Wins!";
        alert(result = "Computer Wins!");
    }

    else if (userSelection === 'scissors' && computerSelection === 'rock') {
        result = "Computer Wins!";
        alert(result = "Computer Wins!");
    }
    
    else if (userSelection === 'scissors' && computerSelection === 'paper') {
        result = "Players Wins!";
        alert(result = "Player Wins!");
    }

    if (result === 'Player Wins!') {
        playerScore = playerScore + 1;
        alert("Your score: " + playerScore + "Computer Score: " + computerScore + " Tie: " + tie);
    }

    else if (result === 'Computer Wins!') {
        computerScore = computerScore + 1;
        alert("Your score: " + playerScore + " Computer Score: " + computerScore + " Tie: " + tie);
        
    }












// Main game function.

function playRound (playerSelection, computerSelection) {

    // design and add your funtion code here!
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));