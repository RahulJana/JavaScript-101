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
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

console.log(menu.entries());

for (const item of menu.entries()) console.log(item);

/*
(2) [0, 'Focaccia']
0: 0
1: "Focaccia"
length: 2
[[Prototype]]: Array(0)
*/

// We can destructure the output of .entries() in the loop itself.
for (const [i, element] of menu.entries()) console.log(`${i + 1} : ${element}`);

// Keys
console.log("Keys: " + Object.keys(restaurant.openingHours));

// Values
console.log(Object.values(restaurant.openingHours));
console.log(Object.values(restaurant.openingHours.fri));

console.log("values inside for loop:---------------------");
for (const value of Object.values(restaurant.openingHours)) {
    console.log(value);
}
console.log("---------------------");

// Entries
console.log(Object.entries(restaurant.openingHours));
console.log(Object.entries(restaurant.openingHours.fri));

console.log("values inside for loop:---------------------");
for (const entry of Object.entries(restaurant.openingHours)) {
    console.log(entry);
}
console.log("---------------------");

// With destructuring
for (const [key, value] of Object.entries(restaurant.openingHours)) {
    console.log(key, value);
}

// with further destructuring
for (const [key, { open, close }] of Object.entries(restaurant.openingHours)) {
    console.log(`On ${key}: opens @ ${open} and closes @ ${close}`);
}
