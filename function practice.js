// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

// declare function

function add(a, b) {
    console.log(a+b);
}
function subtract(a, b) {
    console.log(a-b);
}
function multiply(a, b) {
    console.log(a*b);
}
function divide(a, b) {
    console.log(a/b);
}

add (5,5);
subtract (5,5);
multiply (5,5);
divide (5,5);

// function expression

const add = function (a, b) {
    console.log(a+b);
}
const subtract = function (a, b) {
    console.log(a-b);
}
const multiply = function (a, b) {
    console.log(a*b);
}
const divide = function (a, b) {
    console.log(a/b);
}

add (5,5);
subtract (5,5);
multiply (5,5);
divide (5,5);

// arrow functions

const add = (a,b) => {
    console.log(a+b);
}
const subtract = (a,b) => {
    console.log(a-b);
}
const multiply = (a,b) => {
    console.log(a*b);
}
const divide = (a,b) => {
    console.log(a/b);
}

add (5,5);
subtract (5,5);
multiply (5,5);
divide (5,5);

// callback funtion function for call back use function at part decralation function

function calculator(a, b, operator){
    if(operator === '+'){
        add (a,b);
    }
    if(operator === '-'){
        subtract (a,b);
    }
    if(operator === '*'){
        multiply (a,b);
    }
    if(operator === '/'){
        divide (a,b);
    }
}

calculator(5,5,'-')
