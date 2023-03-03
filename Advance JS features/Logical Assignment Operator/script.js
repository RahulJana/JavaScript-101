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

    orderPizza: function (mainIngr, ...otherIngrs) {
        console.log(`Order received: ${mainIngr} with ${otherIngrs}`);
        console.log(mainIngr);
        console.log(otherIngrs);
    },
};

let rest1 = {
    name: "pasta plaza",
    numGuests: 4,
};

let rest2 = {
    name: "Papillon's Pizza",
    owner: "Richard Papillon", // CS GO player: shox
};

let rest3 = {
    name: "Sasha's Pizza",
    owner: "S1mple",
};

let rest4 = {
    name: "French toast",
    owner: "Dan",
    numGuests: 0, // 0 is considered as a null value.
};

let p4 = {
    score: 0,
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1.numGuests);
console.log(rest2.numGuests);

// Logical assignment of operator
rest1.numGuests ||= 20;
rest2.numGuests ||= 20;
rest3.numGuests ||= 20;

console.log(rest1.numGuests);
console.log(rest2.numGuests);
console.log(rest3.numGuests);

// For null values
console.log("before: " + rest4.numGuests);
rest4.numGuests ||= 30; // Since 0 is considered as a null value.
console.log("After: " + rest4.numGuests);

// Using nullish coalesching operator
console.log("before: " + p4.score);
p4.score ??= 30;
console.log("After: " + p4.score);

// AND Assignment operator
rest1.owner = rest1.owner && "<Anonymous>";
rest2.owner = rest2.owner && "<Anonymous>";

console.log(rest1); // There will be "owner: undefined"
console.log(rest2);

rest3.owner &&= "<Anonymous>";
p4.owner &&= "<Anonymous>";

console.log(rest3);
console.log(p4); // There will be no "owner: undefined"
