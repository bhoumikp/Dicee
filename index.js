const player1Name = prompt('Player 1');
const player2Name = prompt('Player 2');


document.querySelector("#player1").textContent = player1Name;
document.querySelector("#player2").textContent = player2Name;


// Event Listeners
document.addEventListener("click", rolldice);
document.addEventListener("keydown", function(event) {
	if (event.key == " ") {
		rolldice();
	}
})


function rolldice() {

	// Player 2 dice
	var player1 = Math.floor(Math.random() * 6 + 1);
	document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + player1 + ".png");

	// Player 1 dice
	var player2 = Math.floor(Math.random() * 6 + 1);
	document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + player2 + ".png");

	if (player1 > player2) {
		document.querySelector("h1").textContent = player1Name + " Wins!";
	} else if (player1 < player2) {
		document.querySelector("h1").textContent = player2Name + " Wins!";
	} else {
		document.querySelector("h1").textContent = "Draw!";
	}
}
