"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const hidden = document.querySelectorAll(".hidden");
const showModal = document.querySelectorAll(".show-modal");
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
showModal.forEach((element) => {
  element.addEventListener("click", openModal);
});
btn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (a) {
  if (a.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
