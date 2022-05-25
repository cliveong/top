let randomSelection = null; 
const options = ["Rock", "Paper", "Scissors"];
let playerWin = 0;
let botWin = 0;

function computerPlay() {   
    let selection = Math.floor(Math.random() * 3);
    randomSelection = selection;
    return options[selection];
}

function playRound(playerSelection) {
    let playerSelectionTrimmed = playerSelection.trim().toLowerCase();
    const optionsLowercase = ["rock", "paper", "scissors"];
    let playerSelectionIndex = optionsLowercase.indexOf(playerSelectionTrimmed);
    if (playerSelectionIndex < 0) {
        return "Please select from Rock, Paper, Scissors";
    }

    if ((playerSelectionIndex === 0 && randomSelection === 2) || 
    (playerSelectionIndex === 1 && randomSelection === 0) || 
    (playerSelectionIndex === 2 && randomSelection === 1)) {
        playerWin++;
        return "You Win! " + options[playerSelectionIndex] + " beats " + options[randomSelection];
    } else if (playerSelectionIndex === randomSelection) {
        return "It's a draw!";
    } else {
        botWin++;
        return "You lose! " + options[playerSelectionIndex] + " loses to " + options[randomSelection];
    }
}

const outcomeText = document.querySelector(".results");
const score = document.querySelector(".scoreNumber");

function game(choice) {
    let outcome = (playRound(choice, computerPlay()));
    outcomeText.textContent = outcome;
    score.textContent = playerWin + " : " + botWin;

}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    game("rock");
});

paper.addEventListener("click", () => {
    game("paper");
});

scissors.addEventListener("click", () => {
    game("scissors");
});
