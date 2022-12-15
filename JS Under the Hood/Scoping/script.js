"use strict"; // Using strict mode.

function calcAge(birthYear) {
    const age = 2022 - birthYear;
    console.log(firstName); // OUTPUT: Rahul [Global Scope]

    function printAge() {
        let output = `${firstName} is ${age} years old. [From outside BLOCK Scope]`;
        console.log(output); // OUTPUT: Rahul [Global Scope] is 23 years old. [From outside BLOCK Scope]
        // First Name and age not present in the function scope, so it will do a variable look up.

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;
            const ageGroup = "Millennial";
            console.log(`${firstName}, ${age}, ${ageGroup}`);
        } else if (birthYear >= 1997 && birthYear <= 2012) {
            var genZ = true;
            const firstName = "J. Rahul(Inside block Scope)"; // It will be used by the variable lookup.
            const ageGroup = "Gen Z";
            console.log(`${firstName}, ${age}, ${ageGroup}`); // OUTPUT: J. Rahul(Inside block Scope), 23, Gen Z

            console.log(output); // OUTPUT: Rahul [Global Scope] is 23 years old. [From outside BLOCK Scope]
            function add(a, b) {
                return a + b;
            }
            output = "New Output!!!";
            console.log(output); // OUTPUT: New Output!!!
        }
        // console.log(`${firstName}, ${age}, ${ageGroup}`); // Error-msg: Uncaught ReferenceError: ageGroup is not defined

        // Since var is function scoped, they ignore the block. We can access the variables
        console.log(`is Gen-Z: ${genZ}`); // OUTPUT: is Gen-Z: true
    }

    // console.log(add(10, 20));
    printAge();
}

const firstName = "Rahul [Global Scope]";
calcAge(1999);
