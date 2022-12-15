"use strict";

const myName = "Rahul-Global";
const birthYear = 1999;

// function getDetails() {
//     console.log(myName + " -> " + birthYear);
// }
// getDetails();

// console.log(myName);

// Using Objects

// const empRahul = {
//     myName: "Rahul-inside empRahul",
//     birthYear: 1999,

//     calcAge: function () {
//         return 2022 - this.birthYear;
//     },

//     getName: function () {
//         return this.myName;
//     },
// };

// console.log(empRahul.getName() + " -> " + empRahul.calcAge());

//-------------------
// Simple function call

// function getDetailsWithThis() {
//     console.log(this.myName + " -> " + this.birthYear);
// }

// getDetailsWithThis();

// --------------
// Arrow functions

// --------------
// Some other important instances

console.log(this); // this keyword in the global scope is the window object.

const getYOB = function (birthYear) {
    // It is a regular function call
    console.log(birthYear);
    console.log(this); // OUTPUT: undefined [in Strict mode] | In sloppy mode it is window object, just like global scope.
    console.log(typeof this); // OUTPUT: undefined
};

// getYOB(birthYear);

const getYOBArrow = birthYear => {
    console.log(birthYear);
    console.log(this); // OUTPUT: window object[in Strict mode as well as sloppy mode]
    console.log(typeof this); // OUTPUT: Object
};

// getYOBArrow(birthYear);

// This object inside a method expression
const objRahul = {
    myName: "Rahul",
    year: 1999,

    getAge: function () {
        console.log(this); // OUTPUT: {myName: 'Rahul', year: 1999, getAge: ƒ} Returns the data of the object, here objRahul
        console.log(2022 - this.year );
    },
};

objRahul.getAge();
