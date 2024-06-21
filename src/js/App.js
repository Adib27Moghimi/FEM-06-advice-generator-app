"use strict";

import CheckScroll from "./components/CheckScroll.js";
import UpdateClasses from "./components/UpdateClasses.js";
import GetJason from "./components/GetJason.js";
import OrdinalNumber from "./components/OrdinalNumber.js";

// Select elements
const adviceNum = document.getElementById("adviceNum");
const adviceContent = document.querySelector(".advice-content");
const adviceText = document.getElementById("adviceText");
const diceButton = document.getElementById("dice");
const fetchStatus = document.getElementById("fetchStatus");
const finished = document.getElementById("finished");

// UI before fetching
const UIBeforeFetch = () => {
  UpdateClasses(
    fetchStatus,
    ["text-red-600", "text-primary-green-neon"],
    ["text-primary-cyan-light"]
  );
  fetchStatus.textContent = "(will get advice)";
  finished.textContent = "";
};

// Update UI after fetching
const updateUI = (id) => {
  fetchStatus.classList.replace(
    "text-primary-cyan-light",
    "text-primary-green-neon"
  );
  fetchStatus.textContent = `( ${id} )`;
  UpdateClasses(
    finished,
    ["text-red-600", "text-primary-cyan-light"],
    ["text-primary-green-neon"]
  );
};

// Function to display error messages
const displayError = (message1, message2) => {
  adviceNum.textContent = "";
  setTimeout(() => (adviceNum.textContent = "💥"), 100);
  adviceText.textContent = "";
  setTimeout(() => (adviceText.textContent = `${message1} 💥💥💥`), 100);

  fetchStatus.classList.replace("text-primary-cyan-light", "text-red-600");
  fetchStatus.textContent = `${message2} 💥💥💥`;
  finished.classList.add("text-red-600");
};

// Piece of advice production function
const generateRandomAdvice = async () => {
  try {
    const slip = await GetJason(
      `https://api.adviceslip.com/advice?timestamp=${Date.now()}`
    );
    adviceNum.textContent = slip.id;
    adviceText.textContent = slip.advice;
    return `This is the ${OrdinalNumber(slip.id)} advice`;
  } catch (err) {
    throw err;
  }
};

// Function to get advice and update UI
const getIdOfAdvice = async () => {
  try {
    UIBeforeFetch();
    const id = await generateRandomAdvice();
    updateUI(id);
  } catch (err) {
    displayError("Oops:", err.message);
  }
  finished.textContent = "Finished getting advice";
  CheckScroll(adviceContent);
};

diceButton.addEventListener("click", getIdOfAdvice);
document.addEventListener("DOMContentLoaded", CheckScroll(adviceContent));
