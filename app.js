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
})

buttonSeven.addEventListener('click', () => {
    console.log('seven button works')
})

buttonEight.addEventListener('click', () => {
    console.log('eight button works')
})

buttonNine.addEventListener('click', () => {
    console.log('nine button works')
})

buttonMulti.addEventListener('click', () => {
    console.log('multi button works')
})

buttonFour.addEventListener('click', () => {
    console.log('four button works')
})

buttonFive.addEventListener('click', () => {
    console.log('five button works')
})

buttonSix.addEventListener('click', () => {
    console.log('six button works')
})

buttonSubt.addEventListener('click', () => {
    console.log('subt button works')
})

buttonOne.addEventListener('click', () => {
    console.log('one button works')
})

buttonTwo.addEventListener('click', () => {
    console.log('two button works')
})

buttonThree.addEventListener('click', () => {
    console.log('three button works')
})

buttonPlus.addEventListener('click', () => {
    console.log('plus button works')
})

buttonPoint.addEventListener('click', () => {
    console.log('point button works')
})

buttonRei.addEventListener('click', () => {
    console.log('zero button works')
})

buttonDelete.addEventListener('click', () => {
    console.log('delete button works')
})

buttonEqual.addEventListener('click', () => {
    console.log('equal button works')
})