"use strict";
function generateTargetNumber() {
    return Math.trunc(Math.random() * 20) + 1; // since the number is b/w 1 and 20
}
let targetNumber = generateTargetNumber();
// let thinkingEmoji = targetNumber;
const thinkingEmoji = "🤔";
document.querySelector(".number").textContent = thinkingEmoji;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
    const guess = document.querySelector(".guess").value;
    console.log(guess);

    if (!guess) {
        // When there is no input.
        document.querySelector(".message").textContent = "⛔ No Number!";
    } else if (guess == targetNumber) {
        // When player wins
        // CHECK + BUG: === is not working.
        document.querySelector(".message").textContent = "Correct🎉🎉🎉";

        document.querySelector(".number").textContent = targetNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        if (highScore < score) {
            highScore = score;
        }
        document.querySelector(".highscore").textContent = highScore;
    } else if (guess !== targetNumber) {
        if (score == 0) {
            document.querySelector(".message").textContent =
                "Reached maximum number of attempts. You Lost 💩💩";
            document.querySelector("body").style.backgroundColor = "#D02E2E";
            return;
        }
        if (guess - targetNumber >= 5) {
            document.querySelector(".message").textContent =
                "You're Way High 😝";
        } else if (guess - targetNumber < 5 && guess - targetNumber >= 1) {
            document.querySelector(".message").textContent =
                "You're Little Higher 😝";
        } else if (Math.abs(guess - targetNumber) >= 5) {
            document.querySelector(".message").textContent =
                "You're Way Low 😝";
        } else if (
            Math.abs(guess - targetNumber) < 5 &&
            Math.abs(guess - targetNumber) >= 1
        ) {
            document.querySelector(".message").textContent =
                "You're Little Lower 😝";
        }
        score--;
    }
    document.querySelector(".score").textContent = score;
});

// Resetting the game(Play Again)
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;

    targetNumber = generateTargetNumber();

    document.querySelector(".number").textContent = thinkingEmoji;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
});
