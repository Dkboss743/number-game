"use strict";
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const dicel = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const currentPlayer0 = document.querySelector(".player--0");
const currentPlayer1 = document.querySelector(".player--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score0El.textContent = 0;
dicel.classList.add("hidden");
let gameState = true;
let currentScore = 0;
let score = [0, 0];
let activePlayer = 0;

const activePlay = function (value) {
  currentPlayer0.classList.toggle("player--active");
  currentPlayer1.classList.toggle("player--active");
};

const currScore = (activePlayer, textContent) => {
  document.getElementById(`current--${activePlayer}`).textContent = textContent;
};

const setScore = (activePlayer, score) => {
  document.getElementById(`score--${activePlayer}`).textContent = score;
};

const changePlayer = function () {
  currentScore = 0;
  setScore(activePlayer, score[activePlayer]);
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlay(activePlayer);
  currScore(activePlayer, 0);
};

const roll = function () {
  if (gameState) {
    dicel.classList.remove("hidden");

    const dice = Math.trunc(Math.random() * 6) + 1;
    dicel.src = `resources/dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      currScore(activePlayer, currentScore);
    } else {
      currentScore = 0;
      changePlayer();
    }
  }
};

btnRoll.addEventListener("click", roll);

const holdButton = function () {
  if (gameState) {
    score[activePlayer] += currentScore;
    if (score[activePlayer] >= 10) {
      gameState = false;
      dicel.classList.add("hidden");
      setScore(activePlayer, score[activePlayer]);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else changePlayer();
  }
};

btnHold.addEventListener("click", holdButton);

const reset = function (activePlayer) {
  currentScore = 0;
  score = [0, 0];
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
};

btnNew.addEventListener("click", function () {
  reset(activePlayer);
  gameState = true;
});
