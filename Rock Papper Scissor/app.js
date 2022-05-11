const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

var userChoice;
var computerChoice;
var result;

possibleChoices.forEach((possibleChoice) => possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.innerHTML;
        userChoiceDisplay.innerHTML = userChoice;
        getCompRandomNum();
        getResult();
    })
);

function getCompRandomNum() {
    const randomNum = Math.floor(Math.random() * 3 + 1); // possibleChoices.length
    if (randomNum === 1) {
        computerChoice = "Rock";
    }
    if (randomNum === 2) {
        computerChoice = "Scissors";
    }
    if (randomNum === 3) {
        computerChoice = "Paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "its a draw!";
    }
    if ((computerChoice === "Rock" && userChoice === "Paper") || (computerChoice === "Paper" && userChoice === "Scissors") || (computerChoice === "Scissors" && userChoice === "Rock")) {
        result = "you win!";
    }
    if ((computerChoice === "Rock" && userChoice === "Scissors") || (computerChoice === "Paper" && userChoice === "Rock") || (computerChoice === "Scissors" && userChoice === "Paper")) {
        result = "you lost!";
    }
    resultDisplay.innerHTML = result;
}
