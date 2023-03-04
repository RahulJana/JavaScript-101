"use strict";

const openingDays = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
const openingHours = {
    [openingDays[4]]: {
        open: 12,
        close: 22,
    },
    friday: {
        open: 11,
        close: 23,
    },
    // [openingDays[6]]: {
    //     open: 0, // Open 24 hours
    //     close: 24,
    // },
    [`day-${2 + 4}`]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    restaurantName: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // NOTE: Basic JS object literal
    openingHours: openingHours,

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // NOTE: Basic method declaration
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
console.log(openingHours);
console.log(restaurant.openingHours);

const score = {
    p1: 10,
    p2: 20,
    p3: 30,
};

const game = {
    players: ["p1", "p2", "p3"],
    // NOTE: ES6 Enhanced string literal
    score,

    // NOTE: ES6 Method declaration with object literal
    playerName(...players) {
        for (const player of players) console.log(player);
    },
};
console.log(game);
game.playerName(...game.players);
