'use strict'

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

// to check for if displayed content is a number or not
function isNum(val) {
    return !isNaN(val)
};

// if the last item in arr is not a number, remove it and display the button value only in input
// otherwise, add the button value to the end of the input
function insertNum(button) {
    // rebuild this
}

function addIt(button) {
    //rebuild this
}

function subIt(button) {
    //
}

function divideIt(button) {
    //
}

function multiIt(button) {
    //
}

buttonAC.addEventListener('click', () => {
    arr = []
    inputEl.value = null;
    console.log('arr has been cleared!')
    console.log('current arr is: ', arr)
})

buttonI.addEventListener('click', () => {
    console.log('current array: ', arr)
    // add code here
})

buttonJ.addEventListener('click', () => {
    addIt(buttonJ)
})

buttonDivide.addEventListener('click', () => {
    divideIt(buttonDivide)
})

buttonSeven.addEventListener('click', () => {
    insertNum(buttonSeven)
})

buttonEight.addEventListener('click', () => {
    insertNum(buttonEight)
})

buttonNine.addEventListener('click', () => {
    insertNum(buttonNine)
})

buttonMulti.addEventListener('click', () => {
    multiIt(buttonMulti)
})

buttonFour.addEventListener('click', () => {
    insertNum(buttonFour)
})

buttonFive.addEventListener('click', () => {
    insertNum(buttonFive)
})

buttonSix.addEventListener('click', () => {
    insertNum(buttonSix)
})

buttonSubt.addEventListener('click', () => {
    subIt(buttonSubt)
})

buttonOne.addEventListener('click', () => {
    insertNum(buttonOne)
})

buttonTwo.addEventListener('click', () => {
    insertNum(buttonTwo)
})

buttonThree.addEventListener('click', () => {
    insertNum(buttonThree)
})

buttonPlus.addEventListener('click', () => {
    addIt(buttonPlus)
})

buttonPoint.addEventListener('click', () => {
    insertNum(buttonPoint)
})

buttonRei.addEventListener('click', () => {
    insertNum(buttonRei)
})

buttonDelete.addEventListener('click', () => {
    const prevVal = inputDisplay.value;
    
    if (isNum(inputDisplay.value)) {
        const newVal = prevVal.slice(0, -1);
        inputDisplay.value = newVal;
    }
})

buttonEqual.addEventListener('click', () => {
    if (isNum(inputDisplay.value)) {
        arr.push(Number(inputDisplay.value))
        inputDisplay.value = 0
    }

})