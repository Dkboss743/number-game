"use strict";
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const dicel = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const currentPlayer0 = document.querySelector(".player--0");
const currentPlayer1 = document.querySelector(".player--1");

let currentScore = 0;
let score = [0, 0];
score0El.textContent = 0;
score0El.textContent = 0;
dicel.classList.add("hidden");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let activePlayer = 0;
const activePlay = function (value) {
  currentPlayer0.classList.toggle("player--active");
  currentPlayer1.classList.toggle("player--active");
};

const scoreText = (activePlayer, textContent) => {
  document.getElementById(`current--${activePlayer}`).textContent = textContent;
};

const setScore = (activePlayer, score) => {
  document.getElementById(`score--${activePlayer}`).textContent = score;
};

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  dicel.classList.remove("hidden");
  dicel.src = `resources/dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    scoreText(activePlayer, currentScore);
  } else {
    currentScore = 0;
    scoreText(activePlayer, currentScore);
    score[activePlayer] = 0;
    setScore(activePlayer, 0);
    activePlayer = activePlayer === 0 ? 1 : 0;
    activePlay(activePlayer);
  }
});

btnHold.addEventListener("click", function () {
  score[activePlayer] += currentScore;
  currentScore = 0;
  setScore(activePlayer, score[activePlayer]);
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlay(activePlayer);
  scoreText(activePlayer, 0);
});
