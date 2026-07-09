const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultsDisplay = document.getElementById("results")
const runningScore = document.getElementById("rn-score")

function getComputerChoice() {
  const randomNo = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[randomNo];
}

// Replaced by the buttons
// function getHumanChoice() {
//   let userChoice = prompt("What is your choice: Rock, Paper or Scissors");
//   return userChoice.toLowerCase();
// }

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultsDisplay.textContent = `It's a tie! Both chose ${humanChoice}.`;
    return; 
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore += 1;
    resultsDisplay.textContent = `Human wins this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    
    computerScore += 1;
    resultsDisplay.textContent = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
  }

   runningScore.textContent = `Score - Human: ${humanScore} | Computer: ${computerScore}`;

   checkWinner()
}

let humanScore = 0;
let computerScore = 0;

function checkWinner() {
  if (humanScore == 5) {
    console.log("🏆 Humans rule! You won the game!")
    disableButtons()
    return true
  }

  else if (computerScore == 5) {
  console.log("🤖 Computer wins the game! Better luck next time.")
  disableButtons()
  return true
  }

  return false
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function playGame() {
  // Checks if game is over
  const gameOver = checkWinner()

  if (gameOver) {
    console.log("Game Over! Reset to play again.")
    return
  }


  // for (i = 1; i <= 5; i++) {
  //   let humanSelection = getHumanChoice();
  //   let computerSelection = getComputerChoice();
  //   playRound(humanSelection, computerSelection);
  // }
}


rockBtn.addEventListener("click", ()=> {
    playRound("rock", getComputerChoice())
  })

paperBtn.addEventListener("click", ()=> {
    playRound("paper", getComputerChoice())
  })

scissorsBtn.addEventListener("click", ()=> {
    playRound("scissors", getComputerChoice())
  })

playGame()
