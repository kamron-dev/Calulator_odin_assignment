let lastOperand = null;
let newOperand = null;
let result; 
let operator;


// Creatring operator functions
const add = (num1, num2) => num1 + num2; 
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2; 
const divide = (num1, num2) => num1 / num2;

// Creating an operate func to call above operators on numbers 
const operate = (operator, num1, num2) => {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === 'x') return multiply(num1, num2);
    if (operator === '÷') return divide(num1, num2)
}


// Initialzing buttons and display element
const buttonsContainer = document.querySelector('.buttonsEl');
let display1El = document.querySelector('.display');
let display2El = document.querySelector('.display2');
const clearBtn = document.getElementById('aC');

const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const mulptiplyBtn = document.getElementById('multiplyBtn')
const divideBtn = document.getElementById('divideBtn')
const equalsBtn = document.getElementById('equalsBtn')




display2El.textContent = ''
display1El.textContent = ''


const allNumberButtons = buttonsContainer.querySelectorAll(".operand")
const allOperatorBtns = buttonsContainer.querySelectorAll(".operator")

allOperatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (display1El.textContent === '') {
          lastOperand = display2El.textContent;
          display1El.textContent = display2El.textContent;
          display1El.textContent += button.value;
          display2El.textContent = '';
          operator = button.value;

        } else {
            display1El.textContent += button.value;
            operator = button.value;
            newOperand = display2El.textContent;
        }
        
        
        
        
        // displayEl.textContent += operator
        // clearScreen()

    })
})

equalsBtn.addEventListener('click', () => {
    newOperand = display2El.textContent;
    showResult()
    
    
})

// function clearScreen() {
//     displayEl.textContent = ''
// }

function showResult() {
    result = operate(operator, Number(lastOperand), Number(newOperand));
    display1El.textContent = result
    display2El.textContent = '';
    operator = null;
    lastOperand = result
}


allNumberButtons.forEach(button => {
    button.addEventListener('click', () => {
       display2El.textContent += button.value
       
    })
});



// plusBtn.addEventListener('click', () => {
//     display1El.textContent = display2El.textContent
//     display2El.textContent = ''
//     num1 = displayEl.textContent;
//     num2 = displayEl.textContent;
//     operate(add, num1, num2)

// })




clearBtn.addEventListener('click', () => {
    display1El.textContent = ''
    display2El.textContent = ''
});


