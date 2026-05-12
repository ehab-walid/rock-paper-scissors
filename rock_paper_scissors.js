let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  random = Math.floor(Math.random() * 3);
  if (random === 0) return "rock";
  else if (random === 1) return "paper";
  else if (random === 2) return "scissor";
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("Your turn!: ");
  return choice;
}

// getHumanChoice()

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissor") {
    humanScore += 1;
    console.log("You score!");
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "rock"
  ) {
    humanScore += 1;
    console.log("You score!");
  } else if (
    humanChoice.toLowerCase() === "scissor" &&
    computerChoice === "paper"
  ) {
    humanScore += 1;
    console.log("You score!");
  } else if (
    humanChoice.toLowerCase() === "rock" &&
    computerChoice === "paper"
  ) {
    computerScore += 1;
    console.log("Computer scores!");
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "scissor"
  ) {
    computerScore += 1;
    console.log("Computer scores!");
  } else if (
    humanChoice.toLowerCase() === "scissor" &&
    computerChoice === "rock"
  ) {
    computerScore += 1;
    console.log("Computer scores!");
  } else console.log("Tie!");
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  if (computerScore > humanScore) console.log("Computer Wins the game!");
  else if (humanScore > computerScore) console.log("Human Wins the game!");
  else console.log("It's a Tie!");
}

playGame();
