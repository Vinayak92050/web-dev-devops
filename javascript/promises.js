// class Rectangle {
//     constructor(width, height, color) {
//          this.width = width;
//          this.height = height;
//          this.color = color; 
//     }
    
//     area() {
//         const area = this.width * this.height;
//           return area;
//     }
    
//     paint() {
//              console.log(`Painting with color ${this.color}`);
//     }
    
//  }
 
//  const rect = new Rectangle(2, 4,"red");
//  const area = rect.area();
//  rect.paint();
//  console.log(area);
 
// const now = new Date(); // Current date and time
// console.log(now.toISOString()); // Outputs the date in ISO format

// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// const firstName = map.get('name');
// console.log(firstName);

// // returns an object of the Promise class
// function setTimeoutPromisified(ms) {
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)

// // promisified version of readFile
// const fs = require("fs");

// function readTheFile(sendTheFinalValueHere){
    
//     fs.readFile("a.txt", "utf-8",function(err,data){
//         sendTheFinalValueHere(data);
//     })
// }

// function readFile(fileName){
//     //read the file and return its value
//     return new Promise(readTheFile);
// }

// const p = readFile();

// function callback(contents){
//     console.log(contents);
// }

// p.then(callback)

// // promisifed setTimeout
// const fs = require("fs");

// console.log("----top of file----")

// function readTheFile(resolve){
//     console.log("readTheFile called");
//     setTimeout(function() {
//         console.log("callback based setTimeout completed");
//         resolve();

//     },3000);
// }

// function setTimeoutPromisified(fileName) {
//     console.log("setTimeoutPromisified called");
//     // read the file and return its value
//     return new Promise(readTheFile);
// }

// const p = setTimeoutPromisified();

// function callback(){
//     console.log("timer is done");
// }

// p.then(callback)

// console.log("----end of file----")

class Promise2 {
    constructor(fn){
        function afterdone() {
            this.resolve();
        }
        fn(afterdone)
    }
    then(callback){
        this.resolve = callback;
    }
}

function readTheFile(resolve) {
    setTimeout(function(){
        console.log("callback based setTimeout completed");
        resolve();
    },3000);
}

function setTimeoutPromisified(){
    return new Promise2(readTheFile)
}  

let p = setTimeoutPromisified();
function callback() {
    console.log("callback has been called");
}
p.then(callback);