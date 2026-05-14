let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) return "rock";
  else if (random === 1) return "paper";
  else if (random === 2) return "scissor";
}

function playRound(humanChoice) {

  const computerChoice = getComputerChoice();
  const div_results = document.querySelector(".results");

  while (div_results.firstChild) {
    div_results.removeChild(div_results.firstChild);
  }

  let score_header = document.createElement("h1");
  div_results.appendChild(score_header);

  let score_text = document.createElement("p");
  div_results.appendChild(score_text);

  let result_text = document.createElement('p');
  div_results.appendChild(result_text);

  let winner_text = document.createElement("h3");
  div_results.appendChild(winner_text);


  
    

  if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissor") {
    humanScore += 1;
    result_text.textContent = "You score!";
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "rock"
  ) {
    humanScore += 1;
    result_text.textContent = "You score!";
  } else if (
    humanChoice.toLowerCase() === "scissor" &&
    computerChoice === "paper"
  ) {
    humanScore += 1;
    result_text.textContent = "You score!";
  } else if (
    humanChoice.toLowerCase() === "rock" &&
    computerChoice === "paper"
  ) {
    computerScore += 1;
    result_text.textContent = "Computer scores!";
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "scissor"
  ) {
    computerScore += 1;
    result_text.textContent = "Computer scores!";
  } else if (
    humanChoice.toLowerCase() === "scissor" &&
    computerChoice === "rock"
  ) {
    computerScore += 1;
    result_text.textContent = "Computer scores!";
  } else {
    result_text.textContent = "Tie!";
  }

  score_header.textContent = "Score";
  score_text.textContent = humanScore + " : Human | Computer : " + computerScore;

  if (humanScore === 5) {
    winner_text.textContent = "You win!";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    winner_text.textContent = "Computer wins!";
    humanScore = 0;
    computerScore = 0;
  }


}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => playRound(event.target.value));
});

// playGame();
