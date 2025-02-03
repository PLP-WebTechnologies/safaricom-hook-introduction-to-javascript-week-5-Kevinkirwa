// Part 1: JavaScript Basics

// Task 1: Variables and Data Types
const personName = 'John Doe';
const age = 25;
const isStudent = true;
const hobbies = ['reading', 'coding', 'gaming'];
const person = { firstName: 'John', lastName: 'Doe' };

console.log(`Name: ${personName} (Type: ${typeof personName})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Task 2: Simple Calculator
function simpleCalculator() {
    const num1 = parseFloat(prompt('Enter the first number:'));
    const num2 = parseFloat(prompt('Enter the second number:'));
    const operation = prompt('Choose an operation (+, -, *, /):');

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Cannot divide by zero.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operation. Please choose +, -, *, or /.');
            return;
    }

    console.log(`Result: ${result}`);
    const resultElement = document.createElement('p');
    resultElement.textContent = `Calculation Result: ${result}`;
    document.body.appendChild(resultElement);
}

simpleCalculator();

// Task 3: Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to our site.`;
}

const userName = prompt('Please enter your name:');
const greeting = greetUser(userName || 'Guest');

const greetingElement = document.createElement('p');
greetingElement.textContent = greeting;
document.body.appendChild(greetingElement);

// Part 2: Control Structures

// Task 4: Voting Eligibility
const ageInput = prompt('Please enter your age:');
const userAge = parseInt(ageInput, 10);

let eligibilityMessage;
if (isNaN(userAge)) {
    eligibilityMessage = 'Invalid age entered. Please enter a number.';
} else if (userAge >= 18) {
    eligibilityMessage = 'You are eligible to vote!';
} else {
    eligibilityMessage = 'You are not eligible to vote yet.';
}

const eligibilityElement = document.createElement('p');
eligibilityElement.textContent = eligibilityMessage;
document.body.appendChild(eligibilityElement);

// Task 5: Numbers 1-10 List
const numberList = document.createElement('ol');
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    numberList.appendChild(listItem);
}
document.body.appendChild(numberList);

// Part 3: DOM Manipulation

// Task 7: Modify Elements
document.querySelector('h1').textContent = 'JavaScript in Action!';

const dynamicContentDiv = document.getElementById('dynamic-content');
const dynamicParagraph = document.createElement('p');
dynamicParagraph.textContent = 'This content was added dynamically using JavaScript.';
dynamicContentDiv.appendChild(dynamicParagraph);