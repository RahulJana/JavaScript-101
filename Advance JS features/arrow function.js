/*
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage
*/

const arr = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

console.log(arr.map(ele => ele.length));

// Traditional function.
function traditional(a) {
    return a + 100;
}

// Arrow function
const arrow = (a) => a+100;

let res = traditional(10);
console.log(res);

res = arrow(10);
console.log(res);


