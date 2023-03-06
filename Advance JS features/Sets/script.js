"use strict";

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

/*
The Set object lets you store unique values of any type, whether primitive values or object references.
*/

const orderSet = new Set([
    "Chicken Alfredo",
    "Potato Gnocchi",
    "Cacio e Pepe",
    "Chicken Alfredo", // Repeating items
    "Chicken Alfredo",
    "Potato Gnocchi",
    "Cacio e Pepe",
    "Chicken Alfredo",
    "Potato Gnocchi",
    "Cacio e Pepe",
    "Chicken Alfredo",
    "Potato Gnocchi",
    "Cacio e Pepe",
]);

console.log(orderSet);

// Empty set
const emptySet = new Set();
console.log(emptySet);

// Set from a String
const stringToSet = new Set("Rahul Jana, YOB: 1999");
console.log(stringToSet); // Output: {"R", "a", "h", "u", "l", " ", "J", "n", ",", "Y", "O", "B", ":", "1", "9"}

let tempSet = new Set("AaBbAAbbccdc");
console.log(tempSet);

// methods for sets
console.log(orderSet.size);

console.log(orderSet.has("Chicken Alfredo"));
console.log(orderSet.has("Mac and Cheese"));

// Multiple Items can not be checked.
console.log(
    orderSet.has("Chicken Alfredo", "Mac and Cheese", "Pepperoni Pizza")
);

// Adding Elements to the Set
orderSet.add("Garlic Bread", "Cappuccino"); // We can add one Item at a time
console.log(orderSet);

orderSet.add("Cappuccino");
console.log(orderSet);

// Adding similar item again
orderSet.add("Garlic Bread");

// Deleting elements from set
orderSet.delete("Garlic Bread");
console.log(orderSet);

// Set is a iterable so looping is possible
for (const item of orderSet) {
    console.log(item);
}

const tables = [
    "1 Seater",
    "2 Seater",
    "4 Seater",
    "6 Seater",
    "2 Seater",
    "4 Seater",
];
const uniqueTableSet = new Set(tables)
console.log(uniqueTableSet);

// Converting into array
const uniqueTable = [...new Set(tables)];
console.log(uniqueTable);


// Clearing whole set
// orderSet.clear();
// console.log(orderSet);
