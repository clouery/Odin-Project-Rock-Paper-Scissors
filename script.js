let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const num = parseInt(prompt("How many rounds?"));

// query selector
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let hScore = document.querySelector(".hscore");
let cScore = document.querySelector(".cscore");
let winnerText = document.querySelector(".question");
let win = document.querySelector(".win");

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
    if (roundsPlayed >= num) {
        return;
    }

    let cChoice = getComputerChoice();
    if (choice === cChoice) {
        console.log("It's a draw!");
        win.textContent = "This round is a draw";
    } else if (choice === "rock" && cChoice === "scissors") {
        console.log("Human wins");
        win.textContent = "Human wins this round";
        humanScore++;
    } else if (choice === "paper" && cChoice === "rock") {
        win.textContent = "Human wins this round";
        humanScore++;
    } else if (choice === "scissors" && cChoice === "paper") {
        win.textContent = "Human wins this round";
        console.log("Human wins");
        humanScore++;
    } else {
        win.textContent = "computer wins this round";
        console.log("Computer wins!");
        computerScore++;
    }

    roundsPlayed++;
    logScore();

    if (roundsPlayed === num) {
        declareWinner();
    }
}

function logScore() {
    hScore.textContent = "Human Score: " + humanScore;
    cScore.textContent = "Computer Score: " + computerScore;
}

function declareWinner() {
    if (humanScore > computerScore) {
        winnerText.textContent = "You Win!";
    } else if (computerScore > humanScore) {
        winnerText.textContent = "You Lost!";
    } else {
        winnerText.textContent = "Its a draw!";
    }

    document.querySelector(".win").style.display = "none";
    document.querySelector(".choices").style.display = "none";

}