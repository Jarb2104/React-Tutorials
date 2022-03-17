const startGameBtn = document.getElementById('start-game-btn');
const SEL_ROCK = 'rock';
const SEL_PAPER = 'paper';
const SEL_SCISSORS = 'scissors';
const RESULT_DRAW = 'game ends in draw';
const RESULT_PLAYER_WINS = 'player wins';
const RESULT_COMPUTER_WINS = 'computer wins';
let playersPlayChoice;
let computersPlayChoice;
let gameStarted = false;

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function playerPlay() {
	const playersChoice = prompt(`${SEL_ROCK}, ${SEL_PAPER} or ${SEL_SCISSORS}?...`, '').toLowerCase();

	if (!(playersChoice !== SEL_ROCK && playersChoice !== SEL_PAPER && playersChoice !== SEL_SCISSORS)) {
		playersPlayChoice = playersChoice;
	}
}

function computerPlay() {
	const computerChoice = getRandomInt(3);

	switch (computerChoice) {
		case 0:
			computersPlayChoice = SEL_ROCK;
			break;
		case 1:
			computersPlayChoice = SEL_PAPER;
			break;
		case 2:
			computersPlayChoice = SEL_SCISSORS;
			break;
	}
}

function getWinner(prComputerChoice, prPlayerChoice = SEL_PAPER) {
	if (prComputerChoice === prPlayerChoice) {
		return RESULT_DRAW;
	} else if (
		(prComputerChoice === SEL_PAPER && prPlayerChoice === SEL_SCISSORS) ||
		(prComputerChoice === SEL_ROCK && prPlayerChoice === SEL_PAPER) ||
		(prComputerChoice === SEL_SCISSORS && prPlayerChoice === SEL_ROCK)
	) {
		return RESULT_PLAYER_WINS;
	} else {
		return RESULT_COMPUTER_WINS;
	}
}

startGameBtn.addEventListener('click', function () {
	if (!gameStarted) {
		console.log(`Starting the game`);
		gameStarted = true;
		playerPlay();
		computerPlay();
		const gameResult = getWinner(computersPlayChoice, playersPlayChoice);
		alert(`Computer chooses ${computersPlayChoice}... HA! the ${gameResult}..!`);
		gameStarted = false;
	}
});
