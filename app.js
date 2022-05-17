'use strict'

// build calculator class
// include things that calculator need to be able to do
// ie: update the display, clear, append numbers, choose operators...
class Calculator {
    constructor(prevVal, curVal) {
        this.prevVal = prevVal;
        this.curVal = curVal;
        //this.clear()
    }

    clear() {
        this.curVal = '';
        this.prevVal = '';
        this.operator = undefined;      
        
        console.log(`current value = ${this.curVal}`)
        console.log(`previous value = ${this.prevVal}`)
        console.log(`operator = ${this.operator}`)
    }

    isNum(val) {
        return!isNaN(val);
    }

    // if the number is a . AND curVal already has a '.' then exit the function
    // otherwise the current value is appended with the number
    appendNum(number) {
        //console.log('appending number!')
        
        if ((number === '.') && (this.curVal.includes('.'))) {
            // console.log('----> entered if')
            return;
        }
        
        this.curVal = this.curVal + number

        // these are my debug logs while making this function
        
        // console.log('curVal contains . : ', this.curVal.includes('.'))
        // console.log('number.value === . : ', (number.value === '.'))
        console.log('curVal = ', this.curVal)
        // console.log('number = ', number)
    }

    // used to update the display, it will always update to whatever the current value is
    // in calculation the current value is set to the result to display the current answer 
    // after an operator buttonpress or a equals buttonpress
    changeDisplay() {
        // console.log('changing display!')

        inputEl.value = this.curVal
  }

    // if the curVal is empty string, return
    // otherwise do the calculation
    // set prev Val to whatever curVal is, and reset cur Val.
    // set this operator to the operation button pressed
    selectOperator(operator) {
        // console.log('choosing the operator!')

        console.log('---> selectOperator');
        console.log('current value = ', this.curVal)

        if (this.curVal === '') {
            console.log('current value is: \'\' <-----')
            return;
        }

        if (this.curVal != '') {
            console.log('running calculation');
            this.calculation();
        }

        this.operator = operator;
        console.log(`current operator: ${this.operator}`)
        this.prevVal = this.curVal;
        this.curVal = '';
    }

    // make a variable for the answer
    // convert the prev and cur val to numbers with new var
    // in case neither cur or prev is a number, return
    // use switch with this operator, check for each operator and do calc
    // lastly, cur val is result, operator is not defined, prev val is reset
    calculation() {
        //console.log('mathing it up!')

        let result;
        
        const current = parseFloat(this.curVal);
        const previous = parseFloat(this.prevVal);
        
        console.log(`current = ${current}, previous = ${previous}`)
        console.log(`current isNum: ${this.isNum(current)}`)
        console.log(`previous isNum: ${this.isNum(previous)}`)

        if (isNaN(previous) || isNaN(current)) {
            console.log('current or prev is NaN')
            console.log('no calculation ran')
            return
        }

        console.log(`current operator: ${this.operator}`)
        
        // without the break statements js will run code from the first true result to the end
        switch (this.operator) {
            case '/':
                result = previous / current;
                break;

            case '*':
                result = previous * current;
                break;

            case '-':
                result = previous - current;
                break;

            case '+':
                result = previous + current;
                break;
            
            case 'default':
                console.log('default no answer')
                return;
        }

        this.curVal = result;
        this.prevVal = '';
        this.operator = undefined

        console.log('math\'d it up!')
        console.log(`the current answer is ${result}`)
        
    }

    // reset the current value to the current toString().slice(0, -1)
    delete() {
        // console.log('deleting last input!')
        this.curVal = this.curVal.toString().slice(0, -1)
        console.log(`current value: ${this.curVal}`)
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
// since our values in our html buttons are strings, our starting values
// for prevVal and curVal will be empty strings
const calc = new Calculator('', '');


//  forEach works like this: for every i in numButtons, do this
// this way I don't need to write code for every button

// number buttons need to know whether or not to append a number or not
// and if we need to change the display
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(`button number ${button.value} works`)
        
        // we want our calc object to run these functions
        calc.appendNum(button.value);
        calc.changeDisplay();
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(`button operator ${button.value} works`)
        calc.selectOperator(button.value);
        calc.changeDisplay();
    })
})

equalButton.addEventListener('click', () => {
    // console.log('the calculation button works')
    calc.calculation()
    calc.changeDisplay()
})

deleteButton.addEventListener('click', () => {
    console.log('delete button works')
    calc.delete()
    calc.changeDisplay()
})

acButton.addEventListener('click', () => {
    // console.log('all clear button works')
    calc.clear()
    calc.changeDisplay();
})