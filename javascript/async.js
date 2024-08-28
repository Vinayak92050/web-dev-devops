// // find sum of two numbers
// function sum(a,b){
//     return a+b;
// }
// let answer = sum(2,3)
// console.log(answer)

// // find sum from 1 to a number
// function sum(n){
//     let ans = 0;
//     for(let i = 0; i<n;i++){
//         ans = ans + i
//     }
//     return ans;
// }
// const ans =sum(100)
// console.log(ans);

// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);
// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

// // functional argument
// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }
  
//   function doOperation(a, b, op) {
//     return op(a, b)
//   }
  
//   console.log(doOperation(1, 2, sum))

// // asynchronous code
// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("b.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });
// console.log("how r u")

function timeout(){
  console.log("click the button");
}

console.log("Hi");

setTimeout(timeout,1000);
console.log("Welcome to loupe");
let c = 0;
for(let i = 0; i<10000000000; i++){
  c = c + 1;
}
console.log("expensive operation done");