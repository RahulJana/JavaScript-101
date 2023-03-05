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

// Single property
if (restaurant.openingHours.mon)
    console.log("mon Open:" + restaurant.openingHours.mon.open);

if (restaurant.openingHours.fri)
    console.log("fri Open:" + restaurant.openingHours.fri.open);

// Nested Property
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log("mon Open:" + restaurant.openingHours.mon.open);

if (restaurant.openingHours && restaurant.openingHours.fri)
    console.log("fri Open:" + restaurant.openingHours.fri.open);

// Optional Chaining
console.log("mon Open:" + restaurant.openingHours?.mon);

console.log("fri Open:" + restaurant.openingHours?.fri);
console.log("fri Open:" + restaurant.openingHours.fri?.open);

console.log("Sat Open:" + restaurant.openingHours.sat?.open);

// console.log(days[4]);
// console.log(restaurant.openingHours.thu.open);
// console.log(`${days[4]} : ${restaurant.openingHours[days[4]]}`);

for (let day of days) {
    let open = restaurant.openingHours[day]?.open;
    let close = restaurant.openingHours[day]?.close;
    console.log(`${day} : ${open} - ${close}`);
}

for (let day of days) {
    // console.log(day);
    console.log(`${day} : ${restaurant.openingHours[day]?.open ?? "closed"}`);
}

// Optional Chaining on methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist.");

console.log(restaurant.prebook?.("13:05") ?? "Method does not exist.");

// Optional Chaining on Arrays
const players = [
    {
        playerName: "zywoo",
        team: "Team Vitality",
        Roles: ["AWPer", "Rifler"],
    },
    {
        playerName: "s1mple",
        team: "Navi",
        Roles: ["AWPer"],
    },
];

console.log(players[0]?.playerName);

//without optional chaining
if (players[5]) {
    console.log(players.playerName);
} else {
    console.log("player doesnot exists.");
}

//with optional chaining
console.log(players[5]?.playerName ?? "player doesnot exists.");
