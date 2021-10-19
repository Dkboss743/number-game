"use strict";
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#333";
    document.querySelector(".number").style.width = "15rem";
    if (!guess) {
      document.querySelector(".message").textContent = "No number !";
    }
    // When player wins
    else if (guess === secret) {
      document.querySelector(".number").textContent = guess;
      document.querySelector(".message").textContent = "🥳 Correct Ans";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    }
    // When guess in high
    else if (guess > secret) {
      --score;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Number is too high 📈 ";
    }
    //when guess is low
    else if (guess < secret) {
      --score;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Number is too low 📉";
    }
  }
  //lost the game
  else {
    document.querySelector(".score").textContent = "0";
    document.querySelector(".message").textContent = "⭐ You lost the game!";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
