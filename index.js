const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display-input");
let history = document.querySelector(".old-input");
let firstNum;
let secondNum;
let operator;
isFirstNumber = true;
const operators = [
  "root",
  "power",
  "multiply",
  "divide",
  "minus",
  "plus",
  "clear",
];

buttons.forEach((button) => {
  button.addEventListener("click", checkInput);
});

function checkInput() {
  if (isFirstNumber === true) {
    if (this.id === "equal") {
      console.log("equals");
      secondNum = display.innerHTML;
      pushHistoryDisplay(secondNum);
      clearMainDisplay();
      calculate(firstNum, secondNum);
      isFirstNumber = false;
    } else if (operators.includes(this.id) === false) {
      pushMainDisplay(this.id);
    } else if (operators.includes(this.id)) {
      operator = this.id;
      firstNum = display.innerHTML;
      pushHistoryDisplay(firstNum);
      addOperator(operator);
      clearMainDisplay();
    } else {
      console.log("wrong Input");
    }
  } else if (isFirstNumber === false) {
    clearHistoryDisplay();
    pushHistoryDisplay(display.innerHTML);
    firstNum = display.innerHTML;
    clearMainDisplay();

    if (operators.includes(this.id)) {
      operator = this.id;
      addOperator(operator);
      pushHistoryDisplay(secondNum);
      clearMainDisplay();
    } else if (operator.includes(this.id) === false && this.id != "equals") {
      clearHistoryDisplay();
      pushHistoryDisplay(firstNum);
      pushMainDisplay(this.id);
    } else if (this.id === "equal") {
      secondNum = display.innerHTML;
      clearMainDisplay();
      calculate(firstNum, secondNum);
    }
  }
}

function addOperator(operator) {
  if (operator === "plus") history.innerHTML += "+";
  else if (operator === "minus") history.innerHTML += "-";
  else if (operator === "divide") history.innerHTML += "/";
  else if (operator === "multiply") history.innerHTML += "*";
  else if (operator === "power") history.innerHTML += "<sub>2</sub>";
  else if (operator === "root") history.innerHTML += "√";
  else if (operator === "clear") clearAll();
  else {
    console.log("invalid operation");
  }
}

function clearAll() {
  history.replaceChildren();
  display.replaceChildren();
  isFirstNumber = true;
}

function pushHistoryDisplay(num) {
  history.innerHTML += num;
}

function pushMainDisplay(num) {
  display.innerHTML += num;
}

function clearMainDisplay() {
  display.replaceChildren();
}

function clearHistoryDisplay() {
  history = document.querySelector(".old-input");
  history.innerHTML = "";
  history.replaceChildren();
}

function calculate() {
  console.log("kalkuliere");

  if (operator === "plus") plus(firstNum, secondNum);
  else if (operator === "minus") minus(firstNum, secondNum);
  else if (operator === "divide") divide(firstNum, secondNum);
  else if (operator === "multiply") multiply(firstNum, secondNum);
  else if (operator === "power") power(firstNum);
  else if (operator === "root") sqrroot(firstNum);
  else {
    console.log("invalid operation");
  }
}

function convertToNumber(num) {
  num = Number(num);
  return num;
}

function plus(a, b) {
  a = convertToNumber(a);
  b = convertToNumber(b);
  total = a + b;
  pushMainDisplay(total);
  console.log("plus");
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function sqrroot(a) {
  return Math.sqrt(a);
}

function power(a) {
  return a ** 2;
}
