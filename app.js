'use strict'

// returns True if number
function isNum(val) {
    return !isNaN(val)
};

// array for all inputs before adding
let arr = [];

// input element and button elements

const inputEl = document.getElementById('inputDisplay')

const buttonAC = document.getElementById('AC');
const buttonI = document.getElementById('I');
const buttonJ = document.getElementById('J');
const buttonDivide = document.getElementById('divide');

const buttonSeven = document.getElementById('seven');
const buttonEight = document.getElementById('eight');
const buttonNine = document.getElementById('nine');
const buttonMulti = document.getElementById('multi');

const buttonFour = document.getElementById('four');
const buttonFive = document.getElementById('five');
const buttonSix = document.getElementById('six');
const buttonSubt = document.getElementById('subt');

const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const buttonPlus = document.getElementById('plus');

const buttonPoint = document.getElementById('point');
const buttonRei = document.getElementById('rei');
const buttonDelete = document.getElementById('delete');
const buttonEqual = document.getElementById('equal');


// function for number buttons to determine whether number continues or not
function numOrOperator(button) {
    if ((isNum(inputDisplay.value)) || (inputDisplay.value === '.')) {
        inputDisplay.value += button.value;
    } else {
        inputDisplay.value = button.value;
    }
} 

// push input value, selected operator to array, change value of input
function updateArr(button) {
    if (isNum(inputDisplay.value)) {
        arr.push(inputDisplay.value);
        arr.push(button.value);
        inputDisplay.value = button.value;
    } else {
        arr.pop()
        arr.push(button.value);
        inputDisplay.value = button.value;
    };
} 


buttonAC.addEventListener('click', () => {
    arr = []
    inputEl.value = null;
    console.log('arr has been cleared!')
    console.log('current arr is: ', arr)
})

buttonI.addEventListener('click', () => {
    console.log('buttonI works')
    // add code here
})

buttonJ.addEventListener('click', () => {
    console.log('buttonJ works')
    // add code here
})

buttonDivide.addEventListener('click', () => {
    console.log('divide button works')
    updateArr(buttonDivide)
})

buttonSeven.addEventListener('click', () => {
    console.log('inputDisplay = ', inputDisplay.value)
    numOrOperator(buttonSeven)
})

buttonEight.addEventListener('click', () => {
    console.log('eight button works')
    numOrOperator(buttonEight)
})

buttonNine.addEventListener('click', () => {
    console.log('nine button works')
    numOrOperator(buttonNine)
})

buttonMulti.addEventListener('click', () => {
    console.log('multi button works')
    updateArr(buttonMulti)
})

buttonFour.addEventListener('click', () => {
    console.log('four button works')
    numOrOperator(buttonFour)
})

buttonFive.addEventListener('click', () => {
    console.log('five button works')
    numOrOperator(buttonFive)
})

buttonSix.addEventListener('click', () => {
    console.log('six button works')
    numOrOperator(buttonSix)
})

buttonSubt.addEventListener('click', () => {
    console.log('subt button works')
    updateArr(buttonSubt)
})

buttonOne.addEventListener('click', () => {
    console.log('one button works')
    numOrOperator(buttonOne)
})

buttonTwo.addEventListener('click', () => {
    console.log('two button works')
    numOrOperator(buttonTwo)
})

buttonThree.addEventListener('click', () => {
    console.log('three button works')
    numOrOperator(buttonThree)
})

buttonPlus.addEventListener('click', () => {
    console.log('plus button works')
    updateArr(buttonPlus)
})

buttonPoint.addEventListener('click', () => {
    console.log('point button works')
    numOrOperator(buttonPoint)
})

buttonRei.addEventListener('click', () => {
    console.log('zero button works')
    numOrOperator(buttonRei)
})

buttonDelete.addEventListener('click', () => {
    console.log('delete button works')
    const prevVal = inputDisplay.value;
    
    if (isNum(inputDisplay.value)) {
        const newVal = prevVal.slice(0, -1);
        inputDisplay.value = newVal;
    }
})

buttonEqual.addEventListener('click', () => {
    console.log('current array: ', arr)
})