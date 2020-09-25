function rolldice() {

	// Player 2 dice
	var player1 = Math.floor(Math.random() * 6 + 1);
	document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + player1 + ".png");

	// Player 1 dice
	var player2 = Math.floor(Math.random() * 6 + 1);
	document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + player2 + ".png");


	// if player 1 wins
	if (player1 > player2) {
		document.querySelector("h1").textContent = "Player 1 Wins!";
	} 
	// if player 2 wins
	else if (player1 < player2) {
		document.querySelector("h1").textContent = "Player 2 Wins!";
	} 
	// if both players wins
	else {
		document.querySelector("h1").textContent = "Draw!";
	}
}


document.querySelector("button").addEventListener("click", rolldice);

document.addEventListener("keydown", function(event) {
	if (event.key == " ") {
		rolldice();
	}
	console.log(event.key);	
})
