// Creatring operator functions
const add = (num1, num2) => num1 + num2; 
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2; 
const divide = (num1, num2) => num1 / num2; 

// Creating an operate func to call above operators on numbers 
const operate = (operator, num1, num2) => {
    if (operator === add) return add(num1, num2);
    if (operator === subtract) return subtract(num1, num2);
    if (operator === multiply) return multiply(num1, num2);
    if (operator === divide) return divide(num1, num2)
}



console.log(operate(multiply, 6, 2))