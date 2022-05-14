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


// build calculator class
class Calculator {
    constructor(prevValTextElement, curValTextElement) {
        this.curValTextElement = curValTextElement;
        this.prevValTextElement = prevValTextElement;
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

    appendNum(number) {
        if (number === '.' && this.curVal.includes('.')) return;
        this.curVal = this.curVal.toString() + number.toString();
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
        integerDisplay = ''
        } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
        } else {
        return integerDisplay
    }
    }

    changeDisplay() {
        this.curValTextElement.innerText =
            this.getDisplayNumber(this.curVal)
        if (this.operator != null) {
        this.prevValTextElement.innerText =
            `${this.getDisplayNumber(this.prevVal)} ${this.operator}`
        } else {
        this.prevValTextElement.innerText = ''
        }
  }

    findOperator(operator) {
        if (this.curVal === '') return
        if (this.curVal !== '') {
            this.calculation()
        } 
        this.operator = operator;
        this.prevVal = this.curVal;
        this.curVal = '';
    }

    calculation() {
        let result;
        const prev = parseFloat(this.prevVal);
        const cur = parseFloat(this.curVal);

        if (isNaN(prev) || isNaN(cur)) return;

        switch (this.operator) {
            case '+':
                result = prev + cur;
                break;
            
            case '-':
                result = prev - cur;
                break;

            case '*':
                result = prev * cur;
                break;    

            case '/':
                result = prev / cur;
                break;
                
            default:
                return
        }
        this.curVal = result;
        this.operator = undefined;
        this.prevVal = '';
    }

    delete() {
        this.curVal = this.curVal.toString().slice(0, -1)
    }

}

const calc = new Calculator('', '');


buttonAC.addEventListener('click', () => {
    calc.clear()
    calc.changeDisplay()
})

buttonI.addEventListener('click', () => {
    //
})

buttonJ.addEventListener('click', () => {
    //
})

buttonDivide.addEventListener('click', () => {
    divideIt(buttonDivide)
})

buttonSeven.addEventListener('click', () => {
    calc.appendNum(buttonSeven.innerText)
    calc.changeDisplay()
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

})    

buttonEqual.addEventListener('click', () => {
    
})