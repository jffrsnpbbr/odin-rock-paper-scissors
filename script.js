let humanScore = 0;
let computerScore = 0;

function  getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3); // returns random number betwee 0 and 2

  if (randomIndex === 1) {
    return "rock";
  } else if (randomIndex === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
  if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
  }
  
  alert("Invalid choice. Please enter rock, paper, or scissors.");
  return;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors" ||
             humanChoice === "paper" && computerChoice === "rock" ||
             humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win this round!");
    humanScore++;
  } else {
    console.log("Computer wins this round!");
    computerScore++;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);