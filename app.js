


let compChoice = Math.random();
if (compChoice < .34) {
    compChoice = "rock";
}
else if (compChoice <= .67) {
    compChoice = "paper";
} else {
    compChoice = "scissors"
}
//let playersChoice = document.getElementById("button").textContent;

function play(choice1, choice2) {
   
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
document.write("Computer: " + compChoice);


document.write("You picked:" + playersChoice);


function play() {
    let playerChoice = document.getElementById("button1").innerHTML;
    document.getElementById("rock").innerHTML = playerChoice;
}