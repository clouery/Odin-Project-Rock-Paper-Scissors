let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundsPlayed = 0;
const roundsToPlay = parseInt(prompt("How many rounds?"));

// now we add the rounds 
let displayTotalRounds = document.createElement("div");
displayTotalRounds.classList = "rounds";
displayTotalRounds.textContent = "Total Rounds: " + roundsToPlay;
// now current round:
let displayCurrentRound = document.createElement("div");
displayCurrentRound.classList = "rounds";
displayCurrentRound.textContent = "Current Round: " + roundsPlayed;
// add to .match
let displayMatch = document.querySelector(".match");
displayMatch.appendChild(displayCurrentRound);
displayMatch.appendChild(displayTotalRounds);




// query selector
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let hScore = document.querySelector(".hscore");
let cScore = document.querySelector(".cscore");
let dScore = document.querySelector(".draw");

let winnerText = document.querySelector(".question");
let win = document.querySelector(".win");

// eventlistener
rock.addEventListener('click', (event) => {
    event.preventDefault();
    playRound("rock");
})
paper.addEventListener('click', (event) => {
    event.preventDefault();
    playRound("paper");
})
scissors.addEventListener('click', (event) => {
    event.preventDefault();
    playRound("scissors");
})

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
    if (roundsPlayed >= roundsToPlay) {
        return;
    }

    let cChoice = getComputerChoice();
    if (choice === cChoice) {
        drawScore++;
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

    if (roundsPlayed === roundsToPlay) {
        declareWinner();
    }
}

function logScore() {
    hScore.textContent = "Human Score: " + humanScore;
    cScore.textContent = "Computer Score: " + computerScore;
    dScore.textContent = "Draw: " + drawScore;
    displayCurrentRound.textContent = "Current Round: " + roundsPlayed;
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

    const resetbtn = document.createElement("button");
    resetbtn.textContent = "Play Again";
    resetbtn.onclick = () => location.reload();
    displayMatch.appendChild(resetbtn);

}