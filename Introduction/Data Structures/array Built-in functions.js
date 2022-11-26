console.log(
`--------------
Array Built-in Function:
--------------`)
let arr = [ 'Banana', 'Orange', 'Apple', 'Lemon', 'Pineapple' ];
console.log("array.indexOf(searchElement, fromIndex) :")

// indexOf(searchElement) -> Default value -1(If not found)
console.log(arr.indexOf("Apple"));  // Expected Output: 2

console.log(arr.indexOf("dog"));  // Expected Output: -1

/*
indexOf(searchElement, fromIndex)
*/
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf("bison", 2));

console.log(beasts.indexOf("bison", beasts.length));  // Output: -1

console.log(beasts.indexOf("bison"));  // Only 1st instance is returned.



