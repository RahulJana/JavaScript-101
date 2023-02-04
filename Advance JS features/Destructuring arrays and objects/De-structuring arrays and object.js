/*
Destructuring is the act of unpacking elements in an array or object. Destructuring not only allow us to unpack elements, it also gives us the power to manipulate and switch elements we unpacked depending on the type of operation you want to perform.
*/

let { PI } = Math;
console.log(PI);
console.log(PI == Math.PI);

let { pi } = Math;
console.log(pi); // Cant use faulty spellings.

// There is no connection in de-structured variable and source property
PI = 1;
console.log(PI == Math.PI);

// -------------------------------

// De-Structuring arrays:
let a, b, rest;

[a, b] = [1, 2];

[a, b, ...rest] = [10, 20, 30, 40];

console.log(a);
console.log(b);
console.log(rest);
