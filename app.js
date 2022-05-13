// 'use strict'

// const buttonEl = document.getElementById('myButton')

// buttonEl.addEventListener('click', () => {
//     console.log(buttonEl.value)
// })


// const arr = ['(', 500, '*', 10, ')', '+', 37]

// console.log(eval(arr.join('')))

// const buttonNine = document.getElementById('nine')

// buttonNine.addEventListener('click', () => {
//     console.log('it worked');
// })


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

// add values to the input

buttonAC.addEventListener('click', () => {
    arr = []
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
    inputEl.textContent = buttonDivide.value
    arr.push(buttonDivide.value)
    console.log('current arr is: ', arr)
})

buttonSeven.addEventListener('click', () => {
    inputEl.textContent = buttonSeven.value;
    arr.push(buttonSeven.value)
    console.log('current arr is: ', arr)
})

buttonEight.addEventListener('click', () => {
    inputEl.textContent = buttonEight.value;
    arr.push(buttonEight.value);
    console.log('current arr is: ', arr)
})

buttonNine.addEventListener('click', () => {
    inputEl.textContent = buttonNine.value;
    arr.push(buttonNine.value)
    console.log('current arr is: ', arr)
})

buttonMulti.addEventListener('click', () => {
    inputEl.textContent = buttonMulti.value;
    arr.push(buttonMulti.value);
    console.log('current arr is: ', arr)
})

buttonFour.addEventListener('click', () => {
    inputEl.textContent = buttonFour.value;
    arr.push(buttonFour.value);
    console.log('current arr is: ', arr)
})

buttonFive.addEventListener('click', () => {
    inputEl.textContent = buttonFive.value;
    arr.push(buttonFive.value);
    console.log('current arr is: ', arr)
})

buttonSix.addEventListener('click', () => {
    inputEl.textContent = buttonSix.value;
    arr.push(buttonSix.value);
    console.log('current arr is: ', arr)
})

buttonSubt.addEventListener('click', () => {
    inputEl.textContent = buttonSubt.value;
    arr.push(buttonSubt.value);
    console.log('current arr is: ', arr)
})

buttonOne.addEventListener('click', () => {
    inputEl.textContent = buttonOne.value;
    arr.push(buttonOne.value);
    console.log('current arr is: ', arr)
})

buttonTwo.addEventListener('click', () => {
    inputEl.textContent = buttonTwo.value;
    arr.push(buttonTwo.value);
    console.log('current arr is: ', arr)
})

buttonThree.addEventListener('click', () => {
    inputEl.textContent = buttonThree.value;
    arr.push(buttonThree.value);
    console.log('current arr is: ', arr)
})

buttonPlus.addEventListener('click', () => {
    inputEl.textContent = buttonPlus.value;
    arr.push(buttonPlus.value);
    console.log('current arr is: ', arr)
})

buttonPoint.addEventListener('click', () => {
    inputEl.textContent = buttonPoint.value;
    arr.push(buttonPoint.value);
    console.log('current arr is: ', arr)
})

buttonRei.addEventListener('click', () => {
    inputEl.textContent = buttonRei.value;
    arr.push(buttonRei.value);
    console.log('current arr is: ', arr)
})

buttonDelete.addEventListener('click', () => {
    console.log('delete button works')
    // code goes here
})

buttonEqual.addEventListener('click', () => {
    console.log('equal button works')
    // code goes here
})