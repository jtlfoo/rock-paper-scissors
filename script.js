function getComputerChoice() {
	let rockPaperScissors = Math.floor(Math.random() * 3) + 1;
	if (rockPaperScissors === 1) {
		rockPaperScissors = "Rock";
	} else if (rockPaperScissors === 2) {
		rockPaperScissors = "Paper";
	} else if (rockPaperScissors === 3) {
		rockPaperScissors = "Scissors";
	}
	console.log(`Computer has selected ${rockPaperScissors}`);
	return rockPaperScissors;
}

function getHumanChoice() {
	let humanChoice = prompt("Rock, paper, or scissors?");
	humanChoice =
		humanChoice.charAt(0).toUpperCase() +
		humanChoice.slice(1).toLowerCase();
	console.log(`Human has selected ${humanChoice}`);
	return humanChoice;
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, getComputerChoice) {
		if (humanChoice === "Rock" && getComputerChoice === "Rock") {
			console.log("Draw!");
		} else if (humanChoice === "Rock" && getComputerChoice === "Paper") {
			computerScore = computerScore + 1;
			console.log("You lose! Paper beats rock!");
		} else if (humanChoice === "Rock" && getComputerChoice === "Scissors") {
			humanScore = humanScore + 1;
			console.log("You win! Rock beats scissors!");
		} else if (humanChoice === "Paper" && getComputerChoice === "Rock") {
			humanScore = humanScore + 1;
			console.log("You win! Paper beats rock!");
		} else if (humanChoice === "Paper" && getComputerChoice === "Paper") {
			console.log("Draw!");
		} else if (
			humanChoice === "Paper" &&
			getComputerChoice === "Scissors"
		) {
			computerScore = computerScore + 1;
			console.log("You lose! Scissors beats paper!");
		} else if (humanChoice === "Scissors" && getComputerChoice === "Rock") {
			computerScore = computerScore + 1;
			console.log("You lose! Rock beats paper!");
		} else if (
			humanChoice === "Scissors" &&
			getComputerChoice === "Paper"
		) {
			humanScore = humanScore + 1;
			console.log("You win! Scissors beats paper!");
		} else if (
			humanChoice === "Scissors" &&
			getComputerChoice === "Scissors"
		) {
			console.log("Draw!");
		}
	}

	for (let i = 1; i <= 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		playRound(humanSelection, computerSelection);
		console.log(
			`Round ${i} score: Human: ${humanScore} | Computer: ${computerScore}`
		);
		console.log("----------");
	}

	console.log(
		`Final score: Human: ${humanScore} | Computer: ${computerScore}`
	);
}

playGame();
