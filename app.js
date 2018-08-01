let playersChoice = document.getElementById("buttons");




let compChoice = Math.random();
if (compChoice < .34) {
    compChoice = "rock";
}
else if (compChoice <= .67) {
    compChoice = "paper";
} else {
    compChoice = "scissors"
}
document.write(`Computer picked ${compChoice}`);
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
var results = compare(userChoice,compChoice);

document.write(results);
document.write(userChoice,computerChoice);