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

const choice = getComputerChoice();
console.log(choice);