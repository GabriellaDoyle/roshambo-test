
var you;
var yourScore = 0;
var challenger;
var challengerScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.getElementById(choices[i]);
        choice.addEventListener("click", selectChoice);
    }
};

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    challenger = choices[Math.floor(Math.random() * 3)];
    document.getElementById("challenger-choice").src = challenger + ".png";

    if (you == challenger) {
        yourScore += 1;
        challengerScore += 1;
    }
    else {
        if (you == "rock") {
            if (challenger == "scissors") {
                yourScore += 1;
            }
            else if (challenger == "paper") {
                challengerScore += 1;
            }
        }
        else if (you == "scissors") {
            if (challenger == "paper") {
                yourScore += 1;
            }
            else if (challenger == "rock") {
                challengerScore += 1;
            }
        }
        else if (you == "paper") {
            if (challenger == "rock") {
                yourScore += 1;
            }
            else if (challenger == "scissors") {
                challengerScore += 1;
            }
        }
    }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("challenger-score").innerText = challengerScore;