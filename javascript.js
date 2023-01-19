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
const btnDivide = document.querySelector('#divison');
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
btnOne.addEventListener('click', handleEvent);
btnTwo.addEventListener('click', handleEvent);
btnThree.addEventListener('click', handleEvent);
btnFour.addEventListener('click', handleEvent);
btnFive.addEventListener('click', handleEvent);
btnSix.addEventListener('click', handleEvent);
btnSeven.addEventListener('click', handleEvent);
btnEight.addEventListener('click', handleEvent);
btnNine.addEventListener('click', handleEvent);
btnPoint.addEventListener('click', handlePoint;
btnEqual.addEventListener('click', evaluate);
btnAdd.addEventListener('click', setCurrentOperator);
btnSubtract.addEventListener('click', setCurrentOperator);
btnMultiply.addEventListener('click', setCurrentOperator);
btnDivide.addEventListener('click', setCurrentOperator);


function handleEvent() {
    inputOne += parseInt(this.textContent);
    populateDisplay(inputOne);

}

function handlePoint() {
    if
}

function setCurrentOperator() {
    // if (result === null) evaluate();

    if (this.id === 'multiplication') currentOperator = multiply;
    if (this.id === 'subtraction') currentOperator = subtract;
    if (this.id === 'addition') currentOperator = add;
    if (this.id === 'division') currentOperator = divide;
}


function populateDisplay(input) {
    display.textContent = `${input}`;
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
    if (currentOperator === undefined) return display.textContent = inputOne;
    if (currentOperator === "divide" && inputTwo === 0) { alert('You cannot divide by 0')};
    display.textContent = result;
    operate(inputOne, inputTwo, currentOperator)
    display.textContent = `${result}`;
    inputOne = result;
    inputTwo = '';
    currentOperator = undefined;
}