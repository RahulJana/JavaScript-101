"use strict";

// There two ways to select an element by their respective Id.
// * 1. Using querySelector, '#' is needed for describing Id.
const scoreElement0 = document.querySelector("#score--0");

// * 2. Using getElementById <-- this method is relatively faster.
const scoreElement1 = document.getElementById("score--1");

// Dice element
const diceElement = document.querySelector(".dice");

// Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnRules = document.querySelector(".btn--info");
const btnTarget = document.querySelector(".btn--setTarget");

// Current score Element
const currentScoreEl1 = document.getElementById("current--0");
const currentScoreEl2 = document.getElementById("current--1");

// Players
const player1Ele = document.querySelector(".player--0");
const player2Ele = document.querySelector(".player--1");

// Initializing score of player1 and player2 to 0
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;

// Info window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Starting condition.
let target = 20; // Default value of target. TODO: make it dynamic later

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playingState = true;

function init() {
    diceElement.classList.add("hidden");

    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playingState = true;

    scoreElement1.textContent = 0;
    scoreElement0.textContent = 0;

    currentScoreEl2.textContent = 0;
    currentScoreEl1.textContent = 0;

    player1Ele.classList.remove("player--winner");
    player2Ele.classList.remove("player--winner");

    if (!player1Ele.classList.contains("player--active")) {
        player1Ele.classList.add("player--active"); // Resetting default player
    }
    player2Ele.classList.remove("player--active");
}

init();

// Changing the active player
function changeActivePlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // switch to next player
    /*
        if(activePlayer === 0){
             activePlayer = 1;
        }else{
             activePlayer = 0;
        }
    */
    // using ternary operator
    activePlayer = activePlayer === 0 ? 1 : 0;
    // Toggling player--active for both player1 and player2
    player2Ele.classList.toggle("player--active");
    player1Ele.classList.toggle("player--active");
}

// Hold Operation
function holdTheNumber() {
    // 1. Add current score to active player's score.
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
    // 2. Check if the score is more than 100
    if (scores[activePlayer] >= target) {
        playingState = false;
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add("player--winner");
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove("player--active");
        diceElement.classList.add("hidden"); // Once winner is decided the dice will not be visible.
    } else {
        // 3. Switch player
        changeActivePlayer();
    }
}

// Rolling the dice
const diceRoll = function () {
    // Step 1: Generating Random numbers between 1-6; since dice. duh!!
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Step 2: Display the dice.
    diceElement.classList.remove("hidden");
    diceElement.src = `./media/dice-${dice}.png`;

    // Step 3: Check if the dice is 1.
    if (dice !== 1) {
        // Add the value of the dice into the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
    } else {
        changeActivePlayer();
    }
};

btnRoll.addEventListener("click", function () {
    if (playingState) {
        diceRoll();
    }
});

btnHold.addEventListener("click", function () {
    if (playingState) {
        holdTheNumber();
    }
});

btnNew.addEventListener("click", init);

const showRulesWindow = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeRulesWindow = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnRules.addEventListener("click", showRulesWindow);
btnCloseModal.addEventListener("click", closeRulesWindow);

document.addEventListener("keydown", function (keypress) {
    if (keypress.key === "Escape" && !modal.classList.contains("hidden")) {
        closeRulesWindow();
    }
});
