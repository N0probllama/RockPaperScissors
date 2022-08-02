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
        let userLowerCase = userChoice.toLowerCase();




}













// Main game function.

function playRound (playerSelection, computerSelection) {

    // design and add your funtion code here!
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));