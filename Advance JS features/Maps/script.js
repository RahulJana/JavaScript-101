"use strict";

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const restaurant = {
    restaurantName: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        time = "18:00",
        address = "location",
        mainIndex = 1,
        starterIndex = 2,
    }) {
        console.log(
            `Order Received!! at ${time} from ${address}. Starter: ${this.starterMenu[starterIndex]}; Main Menu: ${this.mainMenu[mainIndex]}`
        );
    },

    orderPasta: function (ingr1, ingr2, ingr3) {
        console.log(
            `We received your order: with ${ingr1}, ${ingr2}, ${ingr3}.`
        );
    },

    randomKey: "Random Value",
};

const student = new Map();
student.set("firstName", "Rahul");
student.set("lastName", "Jana");
student.set(1, "Address_1: Midnapore");
student.set(2, "Address_2: Kolkata");
student.set("Skills", [
    "Python",
    "HTML",
    "CSS",
    ["MongoDB", "Express", "React", "Node"],
]);
student.set(true, "Reading.");
student.set(false, "Writing");

console.log(student.get("firstName"));
console.log(student.get(true));

// But there can't be duplicate keys
student.set(true, "Eating.");
console.log(student.get(true));

student.set("Class Starts", 10);
student.set("Class Ends", 18);

let currentTime = 15;
console.log(
    currentTime > student.get("Class Starts") &&
        currentTime < student.get("Class Ends")
);

currentTime = 20;
console.log(
    currentTime > student.get("Class Starts") &&
        currentTime < student.get("Class Ends")
);

// Checking the existance of the elements
console.log(student.has("Skills"));
console.log(student.has("Major"));

// deleting elements
student.set("deletableElement", "deletableContent");
console.log(student);
console.log(student.get("deletableElement"));
console.log(student.delete("deletableElement")); // Returns true

console.log(student.delete("NonExistingContent")); // False, as it is does not exists.

/*
We can delete  keys from object as well using delete operator
*/
console.log("randomKey" in restaurant);
console.log(restaurant.randomKey);
delete restaurant.randomKey;
console.log("randomKey" in restaurant);

// Using array as an element
// Following procedure will not work
student.set([1, 2, 3], "[1,2,3]");
/*
This element exists
{Array(3) => "[1,2,3]"}
key : (3) [1, 2, 3]
value : "[1,2,3]"
But......
*/

console.log(student);
console.log(student.get([1, 2, 3])); // Undefined
/*
Because we have created an array @ heap memory with [1,2,3];
which is not @ same address as [1,2,3] at the get method. So undefined 
*/

// TO get pass this issue:
const elementArr = [4, 5, 6];
student.set(elementArr, "[4,5,6]");
console.log(student);
console.log(student.get(elementArr));

// Although both looks same at output console
/*
Map(10) {
  'firstName' => 'Rahul',
  'lastName' => 'Jana',
  1 => 'Address_1: Midnapore',
  2 => 'Address_2: Kolkata',
  'Skills' => [
    'Python',
    'HTML',
    'CSS',
    [ 'MongoDB', 'Express', 'React', 'Node' ]
  ],
  true => 'Eating.',
  false => 'Writing',
  'Class Starts' => 10,
  'Class Ends' => 18,
  [ 1, 2, 3 ] => '[1,2,3]'
}
-----------------------------------------------------------------------------------------
Map(11) {
  'firstName' => 'Rahul',
  'lastName' => 'Jana',
  1 => 'Address_1: Midnapore',
  2 => 'Address_2: Kolkata',
  'Skills' => [
    'Python',
    'HTML',
    'CSS',
    [ 'MongoDB', 'Express', 'React', 'Node' ]
  ],
  true => 'Eating.',
  false => 'Writing',
  'Class Starts' => 10,
  'Class Ends' => 18,
  [ 1, 2, 3 ] => '[1,2,3]',
  [ 4, 5, 6 ] => '[4,5,6]'
}
[4,5,6]
*/

student.set(document.querySelector("h1"), "Heading");
console.log(student);

//-----------------------------------------------------

// Maps Iteration

/*
Problem with .set() method:
.set() can not set multiple values at a time. So, we will use the following technique;
Creating maps from array 
*/

const question = new Map([
    ["Question", "Highest mountain?"],
    [1, "K2"],
    [2, "Mount Everest"],
    [3, "Kangchenjunga"],
    ["correct", 2],
    [true, "Correct Ans 🎉🎊"],
    [false, "Try again"],
]);

console.log(question);

console.log(Object.entries(restaurant.openingHours)); // Result is an array

const hourMap = new Map(Object.entries(restaurant.openingHours));
console.log(hourMap);

// Quiz App
console.log(question.get("Question"));

for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(`Answer ${key}: ${value}`);
    }
}

const answer = Number(prompt("Input your answer: "));
// const answer = 2;
console.log(answer);

// answer === question.get("correct")
//     ? console.log(question.get(true))
//     : console.log(question.get(false));

// Modified version:
console.log(question.get(question.get("correct") === answer));

// Converting Map to array
console.log([...question]);
// same as -> question.entries();

// Basic functionality
console.log(question.size);

console.log(question.keys());
console.log([...question.keys()]);

console.log(question.values());
console.log([...question.values()]);
