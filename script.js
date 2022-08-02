// Rock, Paper, Scissors. to be played in the browser console for now.

// Player greeting 
alert("Welcome to Rock Paper Scissors");


let playerScore = 0;
let computerScore = 0;
let tie = 0;


// Function to randomly generate computer game choice.
function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    return choices [Math.floor(Math.random() * choices.length)];
}


// Game play function.

function game() {

        let computerSelection = getComputerChoice();
        let playerSelection = promt("Choose an option between rock, paper or scissors: ");
        let userSelection = playerSelection.toLowerCase();

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

    else {
        tie = tie + 1;
        alert("Your score: " + playerScore + "Computer Score: " + computerScore + "Tie: " + tie);
        
    }
}

// Loop that calles on the 'Game' function and plays through 5 rounds against the computer.
for (let i=0; i<5; i++) {
    game();
}

