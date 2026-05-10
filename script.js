let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const num = prompt("How many rounds?");
// query selector
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let hScore = document.querySelector(".hscore");
let cScore = document.querySelector(".cscore");

// eventlistener
rock.addEventListener('click', () => { playRound("rock") })
paper.addEventListener('click', () => { playRound("paper") })
scissors.addEventListener('click', () => { playRound("scissors") })

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 2) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(choice) {
    game();
    let cChoice = getComputerChoice();
    if (choice === cChoice) {
        console.log("It's a draw!");
    } else if (choice === "rock" && cChoice === "scissors") {
        console.log("Human wins");
        humanScore++;
    } else if (choice === "paper" && cChoice === "rock") {
        console.log("Human wins");
        humanScore++;
    } else if (choice === "scissors" && cChoice === "paper") {
        console.log("Human wins");
        humanScore++;
    } else {
        console.log("Computer wins!");
        computerScore++;
    }
    logScore();
    return;
}

function logScore(){
    hScore.textContent = humanScore; 
    cScore.textContent = computerScore;
}


function game() {
    if(roundsPlayed == num) {console.log("Game Over!"); return;}
    roundsPlayed++;
    console.log(`human score: ${humanScore} computer score: ${computerScore}`)
}
