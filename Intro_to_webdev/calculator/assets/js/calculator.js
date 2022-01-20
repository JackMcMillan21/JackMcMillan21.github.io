"use strict";

const currentNum = document.getElementById("current-num");
const previousNum = document.getElementById("previous-num");
const equalsButton = document.getElementById("equals");
const numOne = document.getElementById("num-1");
const numTwo = document.getElementById("num-2");
const numThree = document.getElementById("num-3");
const numFour = document.getElementById("num-4");
const numFive = document.getElementById("num-5");
const numSix = document.getElementById("num-6");
const numSeven = document.getElementById("num-7");
const numEight = document.getElementById("num-8");
const numNine = document.getElementById("num-9");
const numZero = document.getElementById("num-0");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const point = document.getElementById("decimal");
const clear = document.getElementById("clear");
let reset = false;

numOne.addEventListener("click", () => {
  if (reset === true) {
    previousNum.innerHTML += "=" + currentNum.innerHTML;
    currentNum.innerHTML = "";
    reset = false;
  }
currentNum.innerHTML += "1";
});

numTwo.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "2";
});

numThree.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "3";
});

numFour.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "4";
});

numFive.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "5";
});

numSix.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "6";
});

numSeven.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "7";
});

numEight.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "8";
});

numNine.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "9";
});

numZero.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "0";
});

plus.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "+";
});

minus.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "-";
});

multiply.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "*";
});

divide.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += "/";
});

point.addEventListener("click", () => {
    if (reset === true) {
      previousNum.innerHTML += "=" + currentNum.innerHTML;
      currentNum.innerHTML = "";
      reset = false;
    }
  currentNum.innerHTML += ".";
});

clear.addEventListener("click", () => {
  previousNum.innerHTML = "";
  currentNum.innerHTML = "";
});


equalsButton.addEventListener("click", () => {
  previousNum.innerHTML = currentNum.innerHTML;
  currentNum.innerHTML = eval(currentNum.innerHTML);
  reset = true;
});


