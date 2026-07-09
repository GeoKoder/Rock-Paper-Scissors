const choices = ["rock", "paper", "scissors"];
const winningMoves = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const choiceButtons = document.querySelectorAll("[data-choice]");
const resetButton = document.getElementById("reset");
const resultsDisplay = document.getElementById("results");
const scoreDisplays = {
  human: document.getElementById("human-score"),
  computer: document.getElementById("computer-score"),
};

const winningScore = 5;
let scores = {
  human: 0,
  computer: 0,
};

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function formatChoice(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function updateScoreboard() {
  scoreDisplays.human.textContent = scores.human;
  scoreDisplays.computer.textContent = scores.computer;
}

function setButtonsDisabled(isDisabled) {
  choiceButtons.forEach((button) => {
    button.disabled = isDisabled;
  });
}

function endGame(winner) {
  const message =
    winner === "human"
      ? "Game over. Human wins the match!"
      : "Game over. Computer wins the match!";

  resultsDisplay.textContent = message;
  resultsDisplay.classList.add("is-winner");
  setButtonsDisabled(true);
}

function checkWinner() {
  if (scores.human === winningScore) {
    endGame("human");
    return true;
  }

  if (scores.computer === winningScore) {
    endGame("computer");
    return true;
  }

  return false;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  resultsDisplay.classList.remove("is-winner");

  if (humanChoice === computerChoice) {
    resultsDisplay.textContent = `It's a tie! Both chose ${formatChoice(humanChoice)}.`;
    return;
  }

  const humanWins = winningMoves[humanChoice] === computerChoice;
  const roundWinner = humanWins ? "human" : "computer";
  scores[roundWinner] += 1;

  const winningChoice = humanWins ? humanChoice : computerChoice;
  const losingChoice = humanWins ? computerChoice : humanChoice;
  resultsDisplay.textContent = `${humanWins ? "Human" : "Computer"} wins this round! ${formatChoice(
    winningChoice
  )} beats ${formatChoice(losingChoice)}.`;

  updateScoreboard();
  checkWinner();
}

function resetGame() {
  scores = {
    human: 0,
    computer: 0,
  };

  updateScoreboard();
  setButtonsDisabled(false);
  resultsDisplay.classList.remove("is-winner");
  resultsDisplay.textContent = "Choose your first move.";
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

resetButton.addEventListener("click", resetGame);
