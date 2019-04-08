/*Constants and variables for ref*/
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

/*JS math deciding computers choice*/
function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

/*Generates the funtion when a user wins ie. user score increase, change of results text and glow around choice*/
function win(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `Your ${userChoice} beats AI's ${computerChoice}. You Win!`;
	userChoice_div.classList.add("win-glow");
	setTimeout(() => userChoice_div.classList.remove("win-glow"), 500);
}

/*Generates the funtion when a user loses ie. AI score increase, change of results text and glow around choice*/
function lose(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `Your ${userChoice} loses to AI's ${computerChoice}. You lost!`;
	userChoice_div.classList.add("lose-glow");
	setTimeout(() => userChoice_div.classList.remove("lose-glow"), 500);
}

/*Generates the funtion when a user ties ie. no score increase, change of results text and glow around choice*/
function draw(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `Your ${userChoice} equals ${computerChoice}. It's a draw!`;
	userChoice_div.classList.add("draw-glow");
	setTimeout(() => userChoice_div.classList.remove("draw-glow"), 500);
}

/*Gets user choice and AI choice and determines winner*/
function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
			break;
		}
	}

/*Click funtions*/
function main() {
	rock_div.addEventListener('click', () => game("rock"));
	paper_div.addEventListener('click', () => game("paper"));
	scissors_div.addEventListener('click', () => game("scissors"));
}

main();