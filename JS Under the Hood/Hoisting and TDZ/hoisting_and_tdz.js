"use strict";

const name = "Rahul";

// if(name === "Rahul"){
//     //<<<------------ Start of TDZ for variable job
//     // console.log(`${name} is a ${job}`);  // Error-msg: hoisting_and_tdz.js:6 Uncaught ReferenceError: Cannot access 'job' before initialization
//     // console.log(`${name}'s bike: ${bike}`); // OUTPUT: Rahul's bike: undefined
//     const age = 23;
//     console.log(age);
//     // <<<----------- TDZ for variable job
//     const job = "Student";
//     var bike = "RE Classic";
//     // console.log(undeclaredVariable);  // Error-msg: Uncaught ReferenceError: undeclaredVariable is not defined

// }

// Real-life Hoisting example:
// Hoisting with variables:
console.log(me); // OUTPUT: undefined
// console.log(job); // Error-msg: hoisting_and_tdz.js:22 Uncaught ReferenceError: Cannot access 'job' before initialization at hoisting_and_tdz.js:22:13
// console.log(yob);  // Error-msg: hoisting_and_tdz.js:22 Uncaught ReferenceError: Cannot access 'yob' before initialization at hoisting_and_tdz.js:22:13

var me = "Rahul";
let job = "Developer";
const yob = 1999;

// Hoisting with functions:

// console.log(addDecl(2, 3));

function addDecl(a, b) {
    console.log("Inside addDecl()");
    return a + b;
}

// console.log(addExpr(10, 20));  // Error-msg: hoisting_and_tdz.js:37 Uncaught ReferenceError: Cannot access 'addExpr' before initialization at hoisting_and_tdz.js:37:13
const addExpr = function (a, b) {
    return a + b;
};

// console.log(addArrow(50, 60)); // Error-msg: Uncaught ReferenceError: Cannot access 'addArrow' before initialization at hoisting_and_tdz.js:42:13
const addArrow = (a, b) => a + b;

// Example

console.log(numProducts);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log("All products are deleted.");
}


// Var creates property named with the variable in the window object

var a = 1;
let b = 2;
const c = 4;

console.log(a === window.a);
console.log(b === window.b);
console.log(c === window.c);