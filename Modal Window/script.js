"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

// Opens the modal window.
const openModal = function () {
    console.log("Button clicked!!");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

// Closes the modal window.
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
/*
Here we did not used closeModal() <-[With parenthesis], because this would have called the the function as soon as JS engine compile the code. But we want to execute the function when it encounters the the click via EventListener().
*/

// Responding to keyboard events [Closing the modal window with escape key]
document.addEventListener("keydown", function (keypress) {
    if (keypress.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
