"use strict";

let arr = [1, 2];
console.log(arr);

arr = [1, 2, [3, 4]]; // Nested array
console.log(arr);

arr = [1, 2, ...[3, 4]]; // [3, 4] is being destructured inside arr
console.log(arr);

let [a, b, ...restOfArr] = [10, 20, 30, 40]; // 30 and 40 getting repackaged.
console.log(a);
console.log(b);
console.log(restOfArr);

[a, b, ...restOfArr] = arr;
console.log(a);
console.log(b);
console.log(restOfArr);

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

    orderPizza: function (mainIngr, ...otherIngrs) {
        console.log(`Order received: ${mainIngr} with ${otherIngrs}`);
        console.log(mainIngr);
        console.log(otherIngrs);
    },
};

let { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// Functions
const addNums = function (...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
};

addNums(2, 3, 4, 5, 6, 7);
// rest operator converts individual elements into an array of all the elements.

let x = [10, 20, 30];
console.log(typeof x); // object
addNums(x); // Output: 010,20,30
console.log(typeof addNums(x)); // Output: undefined.

console.log(typeof addNums(...x));

restaurant.orderPizza("mozzarella", "Basil", "Tomato");

// If we pass only one arg
restaurant.orderPizza("Pepperoni");
// Rest operator will return empty arr(Object)
