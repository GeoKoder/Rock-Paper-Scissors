function getComputerChoice() {
  const randomNo = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[randomNo];
}

function getHumanChoice() {
  let userChoice = prompt("What is your choice: Rock, Paper or Scissors");
  return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
    console.log(
      "Human wins with " + humanChoice + " and score of " + humanScore
    );
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    console.log("Human wins with " + humanChoice) +
      " and score of " +
      humanScore;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    console.log(
      "Human wins with " + humanChoice + " and score of " + humanScore
    );
  } else {
    computerScore += 1;
    console.log(
      "Computer wins with " + computerChoice + " and score of " + computerScore
    );
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}
