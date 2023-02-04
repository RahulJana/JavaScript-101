"use strict";

// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
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
};

// * -------------------------- Destructuring arrays. ------------------------
let arr = [1, 2, 3, 4];
let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a, b, c);

const [a1, a2, a3, a4] = arr;
console.log(a1, a2, a3, a4);
console.log(arr);

let [first, second] = restaurant.categories;
console.log(first, second);

// Using space as a space holder.
let [item_1, , item_3] = restaurant.categories;
console.log(item_1, item_3);

// Swapping without destructuring.
/*
let temp = item_1;
item_1 = item_2;
item_2 = temp;
*/

// With destructuring
[item_1, item_3] = [item_3, item_1]; // Like Python
console.log(item_1, item_3);

let orders = restaurant.order(2, 0);
console.log(orders); // Returning as an array

let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Returning as individual elements.

// Nested arrays
const nested = [1, 2, [3, 4]];
console.log(nested);

[, , a] = nested;
console.log(a); // Returns the whole array

[, , [b, c]] = nested;
console.log(b, c); // Returns elements.

// Default values
let [p, q, r] = [1, 2];
console.log(p, q, r); // Here r is undefined
// Output: 1 2 undefined

// Lets use default values while destructuring.
let [x = 1, y = 1, z = 1] = [, 20];
console.log(x, y, z);
// Output: 1 20 1

//* ---------------------- Destructuring Objects -----------------------------------
let { restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName, openingHours, categories);

// Renaming variables:
let {
    restaurantName: place,
    openingHours: hours,
    categories: tags,
} = restaurant;
// It does not change the names

console.log(place, hours, tags);
console.log(restaurant);

// Use of default values.
let { menu, starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // menu will be returned as -> undefined

({ menu = [], starterMenu: starters = [] } = restaurant);
console.log(menu, starters);

// Mutating variables
a = 11;
b = 22;
console.log(a, b);

let obj = { a: 33, b: 44, c: 55 };
console.log("obj.a: " + obj.a + " | obj.b: " + obj.b);
// {a, b} = obj; // Uncaught SyntaxError: Unexpected token '='
({ a, b } = obj);
console.log("<Swapped> a: " + a + " ; b: " + b);

// Nested objects
let {
    fri: { open: opn = 10, close: cls = 22 },
} = openingHours;
console.log(opn, cls);

restaurant.orderDelivery({
    time: "20:00",
    address: "South Roy Nagar, Kolkata",
    mainIndex: 3,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: "South Roy Nagar, Kolkata",
    mainIndex: 3,
    starterIndex: 2,
});
