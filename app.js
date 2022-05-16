'use strict'

// build calculator class
class Calculator {
    constructor(prevVal, curVal) {
        this.prevVal = prevVal;
        this.curVal = curVal;
        this.clear()
    }

    clear() {
        this.curVal = '';
        this.prevVal = '';
        this.operator = undefined;
    }

    isNum(val) {
        return!isNaN(val);
    }

    // if the number is a . or curVal already has a . return
    // otherwise the current value is appended with the number
    appendNum(number) {
        console.log('appending number!')
    }

    getDisplayNumber(number) {
        console.log('displaying number!')
    }

    changeDisplay() {
        console.log('changing display!')
  }

    // if the curVal is empty string, return
    // otherwise do the calculation
    // set prev Val to whatever curVal is, and reset cur Val.
    // set this operator to the operation button pressed
    selectOperator(operator) {
        console.log('choosing the operator!')
    }

    // make a variable for the answer
    // convert the prev and cur val to numbers with new var
    // in case neither cur or prev is a number, return
    // use switch with this operator, check for each operator and do calc
    // lastly, cur val is result, operator is not defined, prev val is reset
    calculation() {
        console.log('mathing it up!')
    }

    // reset the current value to the current toString().slice(0, -1)
    delete() {
        console.log('deleting last input!')
    }

}

// buttons
// with querySelectorAll we can get all of the items with [numButton] text
// and put it into one array. I do this for each item with multiple elements
const inputEl = document.getElementById('inputDisplay')

const numButtons = document.querySelectorAll('[numButton]')
const operatorButtons = document.querySelectorAll('[operatorButton]')

const equalButton = document.getElementById('calcButton')
const deleteButton = document.getElementById('deleteButton')
const acButton = document.getElementById('acButton')

// we can log the numButtons variable and see the list of buttons
// console.log(`numButtons: ${numbuttons}`)


// new calc object that is a Calculator
// we need this to keep track of our values
const calc = new Calculator('', '');

// for each eventlisteners


// for every i in numButtons, do this
// this way I don't need to write code for every button

// number buttons need to know whether or not to append a number or not
// and if we need to change the display
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`button number ${button.value} works`)
        // we want our calc object to run these functions
        calc.appendNum(button.value);
        calc.changeDisplay();
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`button operator ${button.value} works`)
        calc.selectOperator(button.value);
        calc.changeDisplay();
    })
})

equalButton.addEventListener('click', () => {
    console.log('the calculation button works')
    calc.calculation()
})

deleteButton.addEventListener('click', () => {
    console.log('delete button works')
    calc.delete()
})

acButton.addEventListener('click', () => {
    console.log('all clear button works')
    calc.clear()
})