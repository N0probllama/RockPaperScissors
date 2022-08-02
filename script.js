// Rock, Paper, Scissors. to be played in the browser console for now.

// Computer selection
function getComputerChoice(){

    const getcomputerChoice = Math.ceil(Math.random()*3);

// Variables as numbers
    if (getComputerChoice < 1) {
        getComputerChoice = "rock";
    }
    else if (1 <= computerChoice <= 2) {
        getComputerChoice = "paper";
    }
     else {
        getComputerChoice = "scissors";   
     }
}



function playRound (playerSelection, computerSelection) {

    // design and add your funtion code here!
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));