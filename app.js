

let compChoice = Math.random();
if (compChoice < .34) {
    compChoice = "rock";
}
else if (compChoice <= .67) {
    compChoice = "paper";
} else {
    compChoice = "scissors"
}
console.log("Computer: " + compChoice);

let compare = function play(choice1, choice2) {
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock Wins!";
        } else {
            return "Paper Wins!";
        }
    } if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper Wins!";
        } else {
            return "Scissors Wins!";
        }
    } if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "Rock Wins!";
        } else {
            return "Scissors Wins!";
        }
    }
};
let playersChoice = {
document.getElementById('rock').onclick = play();
document.getElementById('paper').onclick = play;
document.getElementById('scissors').onclick = play;}
var results = compare(playersChoice,compChoice);


