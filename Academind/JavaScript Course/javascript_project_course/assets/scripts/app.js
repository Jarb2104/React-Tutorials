// Global variables declarations
const initialVal = 0;
let finalResult = initialVal;
let calcLog = [];
let logEntry;

//calculate and output the result
function performCalc(operator, currentResult, inputNumber) {
	const calcDescription = `${currentResult} ${operator} ${inputNumber}`;
	switch (operator) {
		case '+':
			currentResult += inputNumber;
			break;
		case '-':
			currentResult -= inputNumber;
			break;
		case '*':
			currentResult *= inputNumber;
			break;
		case '/':
			currentResult /= inputNumber;
			break;
	}

	logEntry = {
		operation: operator,
		prevResult: finalResult,
		input: inputNumber,
		result: currentResult,
	};

	calcLog.push(logEntry);
	finalResult = currentResult;
	outputResult(finalResult, calcDescription);
	calcLog.push(inputNumber);
}

//Call the perform calculation function with the correct operation
function addition() {
	performCalc('+', finalResult, +userInput.value);
}

function subtraction() {
	performCalc('-', finalResult, +userInput.value);
}

function multiplication() {
	performCalc('*', finalResult, +userInput.value);
}

function division() {
	performCalc('/', finalResult, +userInput.value);
}

//Binding the click events to their respective functions for operation
addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', division);
