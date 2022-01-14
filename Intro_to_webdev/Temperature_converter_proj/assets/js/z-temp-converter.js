"use strict";

const celsiusText = document.getElementById("celsius-text");
const fahrenheitText = document.getElementById("fahrenheit-text");
const buttonOne = document.getElementById("button-1");
const buttonTwo = document.getElementById("button-2");
const fahrenheitInput = document.getElementById("fahrenheit-convert");
const celsiusInput = document.getElementById("celsius-convert");

buttonOne.addEventListener("click", () => {
  let Tempature = celsiusInput.value;
  if (isNaN(Tempature)) {
    celsiusText.innerHTML = "Please only use number charecters";
  } else if (Tempature == "") {
    celsiusText.innerHTML = "Please enter a number";
  } else {
    celsiusText.innerHTML = Tempature * 1.8 + 32;
  }
});

buttonTwo.addEventListener("click", () => {
  let Tempature = fahrenheitInput.value;
  if (isNaN(Tempature)) {
    fahrenheitText.innerHTML = "Please only use number charecters";
  } else if (Tempature == "") {
    fahrenheitText.innerHTML = "Please enter a number";
  } else {
    fahrenheitText.innerHTML = (Tempature - 32) / 1.8;
  }
});

//Dark Mode
const darkModeButton = document.getElementById('dark-mode');
const background = document.getElementById("main-container");
const headings = document.querySelectorAll('h2');
const celsiusTextarea = document.getElementById("celsius-output");
const fahrenheitTextarea = document.getElementById("fahrenheit-output");
const resultsText = document.querySelectorAll('p');

darkModeButton.addEventListener("click", () => {
    //background
    background.classList.toggle('background-dark');
    //h2 headings
    Array.from(headings).forEach (el =>{
        el.classList.toggle("darkmode-headings")
    })
    //input backgrounds
    fahrenheitInput.classList.toggle("darkmode-fahrenheit-input");
    celsiusInput.classList.toggle("darkmode-celsius-input");
    //background results background
    celsiusTextarea.classList.toggle("darkmode-celsius-textarea");
    fahrenheitTextarea.classList.toggle("darkmode-fahrenheit-textarea");
    //results text
        Array.from(resultsText).forEach((el) => {
          el.classList.toggle("results-text");
        });
});

