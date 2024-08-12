
var a = 1;
a = "vinayak";
a = true;

console.log(a)

let firstname = "John";     // Variable that can be reassigned
const age = 30;        // Constant variable that cannot be reassigned
var isStudent = true;  // Older way to declare variables, function-scoped
console.log(firstname);
console.log(age);
console.log(isStudent);


let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator(equal value and equal type)
let isTrue = (true && false); // Logical operator

console.log(sum);

// Function declaration
function meet(name) {
    return "Hello, " + name;
}

// Function call
let message = meet("John"); // "Hello, John"
console.log(message);


function canVote(age){
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}}
let ans = canVote(19);
console.log(ans); 

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}


// Write a function that takes a user as an input and greets them with their name and age

function greet(user) {
    console.log("Hi " + user.name + ", your age is " + user.age);
}

let user = {
    name: "raman",
    age: 60
}

greet(user);

// array of objects
const uzers = [{
    name: "Rajnikant",
    age: 21
}, {
    name: "raman",
    age: 22
}]

const user1 = uzers[0] 
const user1Age = uzers[0].age
console.log(user1);
console.log(user1Age);

const user3 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user3.address.city;
console.log(city);
