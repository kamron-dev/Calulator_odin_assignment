// Creatring operator functions
const add = (num1, num2) => num1 + num2; 
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2; 
const divide = (num1, num2) => num1 / num2;


// Initialzing buttons and display elements
const buttonsContainer = document.querySelector('.buttonsEl')
const displayEl = document.querySelector('.display')
const clearBtn = document.getElementById('aC')

// Creating an operate func to call above operators on numbers 
const operate = (operator, num1, num2) => {
    if (operator === add) return add(num1, num2);
    if (operator === subtract) return subtract(num1, num2);
    if (operator === multiply) return multiply(num1, num2);
    if (operator === divide) return divide(num1, num2)
}

displayEl.textContent = ''


const allNumberButtons = buttonsContainer.querySelectorAll(getNumberButtons())

function getNumberButtons() {
    let allButtons = [];
    for (let i = 0; i <= 9; i++) {
        allButtons.push(`#b${i}`) 
    }
    return allButtons
}

allNumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayEl.textContent += button.textContent
    })
});

clearBtn.addEventListener('click', () => {
    displayEl.textContent = ''
})

// button8.addEventListener('click', () => {
//     displayEl.textContent = button8.textContent
// })
