let playerScore = 0;
let computerScore = 0;
let draws = 0;
function getComputerChoice() {
    let randomNumber =
        Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a draw!"; draws = draws + 1;
    } else if (
        (playerChoice === "rock" && computerChoice ===
            "scissors") ||
        (playerChoice === "paper" && computerChoice ===
            "rock") ||
        (playerChoice === "scissors" && computerChoice ===
            "paper")
    ) {
        result = "You win!"; playerScore = playerScore + 1;
    } else {
        result = "You lose!"; computerScore = computerScore +
            1;
    }
    document.getElementById("choices").innerHTML =
        "You chose " + playerChoice +
        ". The computer chose " + computerChoice + ".";
    document.getElementById("result").innerHTML = result;
    document.getElementById("score").innerHTML =
        "You: " + playerScore + " | Computer: " +
        computerScore +
        " | Draws: " + draws;
}
