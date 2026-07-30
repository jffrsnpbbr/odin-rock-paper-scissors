// will write a function that randomly returns “rock”, “paper” or “scissors”. -- done
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”. -- done

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

// const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(`Human choice: ${humanChoice}`);
console.log(`Computer choice: ${computerChoice}`);