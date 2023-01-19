// calculator
// let displayValue = 0;
let inputOne = '';
let inputTwo = '';
let result = null;
let currentOperator;


function add(a, b) {
    return result = a + b;
}

function subtract(a, b) {
    return result = a - b;
}

function multiply(a, b) {
    return result = a * b;
}

function divide(a, b) {
    return result = a / b;
}

function operate(a, b, operator) {
    operator(a, b);
}


// UI
const btnClear = document.querySelector('#clear');
const btnPercentage = document.querySelector('#percentage');
const btnDivide = document.querySelector('#division');
const btnSeven = document.querySelector('#number-seven');
const btnEight = document.querySelector('#number-eight');
const btnNine = document.querySelector('#number-nine');
const btnMultiply = document.querySelector('#multiplication');
const btnFour = document.querySelector('#number-four');
const btnFive = document.querySelector('#number-five');
const btnSix = document.querySelector('#number-six');
const btnSubtract = document.querySelector('#subtraction');
const btnOne = document.querySelector('#number-one');
const btnTwo = document.querySelector('#number-two');
const btnThree = document.querySelector('#number-three');
const btnAdd = document.querySelector('#addition');
const btnZero = document.querySelector('#zero');
const btnPoint = document.querySelector('#comma');
const btnEqual = document.querySelector('#equal-result');
const display = document.querySelector('#displayP')

btnClear.addEventListener('click', clearAll);
btnOne.addEventListener('click', () => handleEvent(btnOne.textContent));
btnTwo.addEventListener('click', () => handleEvent(btnTwo.textContent));
btnThree.addEventListener('click', () => handleEvent(btnThree.textContent));
btnFour.addEventListener('click', () => handleEvent(btnFour.textContent));
btnFive.addEventListener('click', () => handleEvent(btnFive.textContent));
btnSix.addEventListener('click', () => handleEvent(btnSix.textContent));
btnSeven.addEventListener('click', () => handleEvent(btnSeven.textContent));
btnEight.addEventListener('click', () => handleEvent(btnEight.textContent));
btnNine.addEventListener('click', () => handleEvent(btnNine.textContent));
btnZero.addEventListener('click', () => handleEvent(btnZero.textContent));
btnPoint.addEventListener('click', handlePoint);
btnEqual.addEventListener('click', evaluate);
btnAdd.addEventListener('click', setCurrentOperator);
btnSubtract.addEventListener('click', setCurrentOperator);
btnMultiply.addEventListener('click', setCurrentOperator);
btnDivide.addEventListener('click', setCurrentOperator);


function handleEvent(number) {
    if (display.textContent === '0') display.textContent = '';
    display.textContent += number;
}

function handlePoint() {
    if (display.textContent.includes('.')) return;
    display.textContent += '.'
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

function setCurrentOperator() {
    evaluate();
    if (this.id === 'multiplication') currentOperator = multiply;
    if (this.id === 'subtraction') currentOperator = subtract;
    if (this.id === 'addition') currentOperator = add;
    if (this.id === 'division') currentOperator = divide;
    inputOne = Number(display.textContent);
    resetScreen();
}


function resetScreen() {
    display.textContent = '';
}


function clearAll() {
    display.innerHTML = "0";
    displayValue = 0;
    inputOne = '';
    inputTwo = '';
    result = null;
    currentOperator = undefined;
}


function evaluate() {
    inputTwo = Number(display.textContent);
    if (currentOperator === undefined) return display.textContent;
    if (currentOperator === divide && display.textContent === '0') {
        display.textContent = 'ERROR!'; 
        return;
    };

    operate(inputOne, inputTwo, currentOperator)
    display.textContent = roundResult(result);
    inputOne = result;
    inputTwo = '';
    currentOperator = undefined;
}