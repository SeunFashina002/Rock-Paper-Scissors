function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  RandChoice = Math.floor(Math.random(choice) * choice.length);
  compRandChoice = choice[RandChoice];
  return compRandChoice;
}

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function getComputerResult(playerChoice, computerChoice) {
  let botScore;

  if (playerChoice == computerChoice) {
    botScore = 0;
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    botScore = 1;
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    botScore = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    botScore = 1;
  } else {
    botScore = -1;
  }
  return botScore;
}

let totalScore = { playerScore: 0, computerScore: 0 };
let result;
let hands;
let playerResult;

function showResult(score, playerChoice, computerChoice) {
  result = document.getElementById("result");
  hands = document.getElementById("hands");
  playerResult = document.getElementById("player-score");
  botResult = document.getElementById("bot-score");
  if (score == 1) {
    result.innerText = "You win";
  } else if (score == -1) {
    result.innerText = "You lose";
  } else if (score == 0) {
    result.innerText = "It's a tie";
  }
  hands.innerText = `You: ${playerChoice} vs Bot: ${computerChoice}`;
  playerResult.innerText = `Your Score: ${totalScore["playerScore"]}`;
  botResult.innerText = `computer score : ${totalScore["computerScore"]}`;
}

function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  let computerChoice = getComputerChoice();
  console.log({ computerChoice });
  let score = getResult(playerChoice, computerChoice);
  let botScore = getComputerResult(playerChoice, computerChoice);
  console.log({ score });
  totalScore["playerScore"] += score;
  totalScore["computerScore"] += botScore;

  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  let endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

function endGame() {
  totalScore["playerScore"].innerText = 0;
  totalScore["computerScore"].innerText = 0;
  result.innerText = "";
  hands.innerText = "";
  playerResult.innerText = "";
}

playGame();
