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

let arr = [1, 2];
let newArr = [5, 6, 7, arr[0], arr[1]];
console.log(newArr);

// Using spread operator.
let goodNewArray = [5, 6, 7, ...arr];
console.log(goodNewArray);

let xArr = [...arr, 5, 6, 7, ...arr];
console.log(xArr);

let updatedMainMenu = [...restaurant.mainMenu, "Pasta Carbonara"];
console.log(updatedMainMenu);

// Copy array
let mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

let fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

// * Iterables in JS: Arrays , Strings, Maps, Sets. Objects are NOT Iterables
// Using spread operators on other iterables.
let x = "Pasta";
console.log(...x);

// Adding characters in string.
let chars = [...x, " ", ..."Carbonara"];
console.log(chars);

["perciatelli", "Shrimp", "Anchovies"];
// let ingredients = [
//     prompt("Ingredient 1: "),
//     prompt("Ingredient 2: "),
//     prompt("Ingredient 3: "),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// x = [1, 2, 3]
// let [a, b, c] = [...x];

let newResturant = { foundedIn: 1999, ...restaurant, founder: "Leo" };
console.log(newResturant);

// Shallow copying
const restaurantCopy = { ...newResturant };
restaurantCopy.restaurantName = "Cafe Italiano";
console.log("restaurantCopy name: " + restaurantCopy.restaurantName);
console.log("restaurant name: " + restaurant.restaurantName);
