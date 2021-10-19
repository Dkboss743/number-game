"use strict";
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setScore = (score) =>
  (document.querySelector(".score").textContent = score);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#333";
    document.querySelector(".number").style.width = "15rem";
    if (!guess) {
      displayMessage("No number !");
    }
    // When player wins
    else if (guess === secret) {
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      document.querySelector(".number").textContent = guess;
      displayMessage("🥳 Correct Ans");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    } else if (guess !== secret) {
      --score;
      setScore(score);
      guess > secret
        ? displayMessage("Number is too high 📈 ")
        : displayMessage("Number is too low 📉");
    }
  }
  //lost the game
  else {
    setScore("0");
    displayMessage("⭐ You lost the game!");
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  setScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
