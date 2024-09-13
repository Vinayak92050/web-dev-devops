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

// class Promise2 {
//     constructor(fn){
//         function afterdone() {
//             this.resolve();
//         }
//         fn(afterdone)
//     }
//     then(callback){
//         this.resolve = callback;
//     }
// }

// function readTheFile(resolve) {
//     setTimeout(function(){
//         console.log("callback based setTimeout completed");
//         resolve();
//     },3000);
// }

// function setTimeoutPromisified(){
//     return new Promise2(readTheFile)
// }  

// let p = setTimeoutPromisified();
// function callback() {
//     console.log("callback has been called");
// }
// p.then(callback);

// // callback hell
//  function callback(){
//     console.log("hi")
// }
// setTimeout(function(){
//     console.log("hi")
//     setTimeout(function(){
//         console.log("hello")
//         setTimeout(function(){
//             console.log("hello there")
//         },5000);
//     },3000);
// },1000);


// // promisified way 
// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     })
// }

//  setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("hi there");
//         });    
//     });
//  });

// // alternate way(promise chaining)

// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     })
// }

// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     return setTimeoutPromisified(3000)
// }).then(function(){
//     console.log("hello");
//     return setTimeoutPromisified(5000)
// }).then(function(){
//     console.log("hi there");
// });
// console.log("outside the callback hell");

// //sorted string in javascript

// let str1 = "asfd";
// const sortedString = str1.split("").sort().join("");
// console.log(sortedString);

// // async await 
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
  //syntactic sugar
// async function solve() {
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000);
//     console.log("hi there");
//   }
  
//   solve();

const fs = require("fs");
function readFileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("a.txt","utf-8",function(err,data){
            //err
            if (err) {
                reject("File not found")
            }else{
                resolve(data);
            }
            
        });
    });
}

readFileAsync()
.then(function(x){
    console.log("files has been read")
    console.log(x);
})
.catch(function(e){
    console.log(e);
})