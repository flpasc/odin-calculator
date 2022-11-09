const buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display-input");
let history = document.querySelector(".old-input");
let firstNum;
let secondNum;
let operator;
isFirstNumber = true;
isFirstOperator = true;
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
			isFirstOperator = true;
			console.log("equals");
			secondNum = display.innerHTML;
			pushHistoryDisplay(secondNum);
			clearMainDisplay();
			calculate(firstNum, secondNum);
			isFirstNumber = false;
		} else if (operators.includes(this.id) === false && this.id != "clear") {
			pushMainDisplay(this.id);
		} else if (operators.includes(this.id) && this.id != "clear") {
			if (isFirstOperator === false) error();
			else {
				isFirstOperator = false;
				operator = this.id;
				firstNum = display.innerHTML;
				pushHistoryDisplay(firstNum);
				addOperator(operator);
				clearMainDisplay();
			}
		} else if (this.id === "clear") {
			clearAll();
		} else {
			console.log("wrong Input");
		}
	} else if (isFirstNumber === false) {
		console.log("false");

		if (
			operators.includes(this.id) &&
			this.id != "clear" &&
			this.id != "equal"
		) {
			if (isFirstOperator === false) error();
			else {
				firstNum = display.innerHTML;
				clearHistoryDisplay();
				pushHistoryDisplay(firstNum);
				operator = this.id;
				addOperator(operator);
				clearMainDisplay();
			}
		} else if (
			operator.includes(this.id) === false &&
			this.id != "equal" &&
			this.id != "clear"
		) {
			console.log("push to main");
			pushMainDisplay(this.id);
			secondNum = display.innerHTML;
		} else if (this.id === "equal") {
			pushHistoryDisplay(secondNum);
			clearMainDisplay();
			calculate(firstNum, secondNum);
		} else if (this.id === "clear") {
			clearAll();
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
	else {
		console.log("invalid operation");
	}
}

function clearAll() {
	clearHistoryDisplay();
	clearMainDisplay();
	isFirstNumber = true;
	isFirstOperator = true;
}

function pushHistoryDisplay(num) {
	history.innerHTML += num;
}

function pushMainDisplay(num) {
	display.innerHTML += num;
}

function clearMainDisplay() {
	display.innerHTML = "";
}

function clearHistoryDisplay() {
	history.innerHTML = "";
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
	firstNum = total;
	pushMainDisplay(total);
	console.log("plus");
}

function minus(a, b) {
	a = convertToNumber(a);
	b = convertToNumber(b);
	total = a - b;
	firstNum = total;
	pushMainDisplay(total);
	console.log("minus");
}

function multiply(a, b) {
	a = convertToNumber(a);
	b = convertToNumber(b);
	(total = a * b), (firstNum = total);
	pushMainDisplay(total);
	console.log("multiply");
}

function divide(a, b) {
	a = convertToNumber(a);
	b = convertToNumber(b);
	total = a / b;
	firstNum = total;
	pushMainDisplay(total);
	console.log("divide");
}

function power(a) {
	a = convertToNumber(a);
	total = a ** 2;
	firstNum = total;
	pushMainDisplay(total);
	console.log("power");
}

function sqrroot(a) {
	a = convertToNumber(a);
	total = Math.sqrt(a);
	firstNum = total;
	pushMainDisplay(total);
	console.log("sqrroot");
}

function error() {
	clearAll();
	pushMainDisplay("ERROR! VERKALKULIERT");
}
