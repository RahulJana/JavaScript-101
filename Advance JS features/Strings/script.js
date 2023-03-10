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

// But there can't be duplicate keys
student.set(true, "Eating.");

student.set("Class Starts", 10);
student.set("Class Ends", 18);

//----------------------------------------------------------------------

// String operation

const airline = "Fly India";
console.log(airline[0]);
console.log(airline[3]);
for (const element of airline) {
    console.log(element);
}
console.log("airline.length: " + airline.length);
console.log("--------------------------------");
const planeModel = "A420";
console.log(planeModel[0]);
console.log(
    planeModel[1] +
        " ; " +
        typeof planeModel[1] +
        "; Converting into number: Number(planeModel[1])-> " +
        Number(planeModel[1]) +
        " ; Type of: " +
        typeof Number(planeModel[1])
);
console.log(planeModel[2], typeof planeModel[2]);
console.log(planeModel[3], typeof planeModel[3]);

// Getting the index of an character
console.log(airline.indexOf("i"));

const tempStr = "Aaabbcaggcahkkdl;eo";
console.log(tempStr.indexOf("a"));
console.log(tempStr.lastIndexOf("a"));

// Entring invalid String
console.log(airline.indexOf("india")); // Output: -1 ; As string is case sensitive

// Slicing String
/*
* Syntax:
slice(indexStart)
slice(indexStart, indexEnd)
*/
console.log(tempStr.slice(3));
console.log(tempStr.slice(3, 7));
console.log(tempStr.slice(-8, -1)); //  From behind

const checkMiddleSeat = function (seat) {
    /*
    there are six seats; that means:
    A B C D E F; B and E are the middle seat
    */
    seat.slice(-1) === "B" || seat.slice(-1) === "E"
        ? console.log("Middle Seat 🤢")
        : console.log("Not Middle Seat.");
};

checkMiddleSeat("4A");
checkMiddleSeat("6B");
checkMiddleSeat("8E");

// Boxing
console.log(new String("Rahul Jana"));
console.log(typeof new String("Rahul Jana")); // Converted into an object

// Slicing operation on object
console.log(typeof new String("Rahul Jana").slice(2)); // Converted back to a string

// String Methods
console.log(airline.toLowerCase());

console.log(airline.toUpperCase());

// Converting Random strings
console.log("Rahul Jana".toLowerCase());
console.log("Rahul Jana".toUpperCase());

// Case fixing
const passengerName = "rAHuL";
const passengerNameLower = passengerName.toLowerCase();
const passengerNameCorrect =
    passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log(passengerNameCorrect);

// Comparing emails
const email = "i.rahuljana@gmail.com";
const loginEmail = "   I.RahulJana@Gmail.COM    \n";

const lowerCaseEmail = loginEmail.toLowerCase();
console.log(lowerCaseEmail);

// Trimming white space and \n; at both end
const trimmedEmail = lowerCaseEmail.trim();
console.log(trimmedEmail);

const trimEndEmail = lowerCaseEmail.trimEnd();
console.log(trimEndEmail);

const trimStartEmail = lowerCaseEmail.trimStart();
console.log(trimStartEmail);

// Replacing
const flightPath = "Kolkata -> Bengaluru";
const newDestination = flightPath.replace("Bengaluru", "Bangkok");
console.log(newDestination);

const announcement =
    "Good afternoon passengers. This is the pre-boarding announcement for flight 89B to Rome. Good afternoon passengers. This is the pre-boarding announcement for flight 89B to Rome. Good afternoon passengers. This is the pre-boarding announcement for flight 89B to Rome.";

const updatedFirstInstanceAnnouncement = announcement.replace("Rome", "Prague");
console.log(updatedFirstInstanceAnnouncement);

/*
Output: Good afternoon passengers. This is the pre-boarding announcement for flight 89B to Prague. Good afternoon passengers. This is the pre-boarding announcement for flight 89B to Rome. Good afternoon passengers. This is the pre-boarding announcement for flight 89B to Rome.
---> Only first instance is changed.
*/

const replacedAllAnnouncement = announcement.replaceAll("Rome", "Prague");
console.log(replacedAllAnnouncement);

// We can achieve the same thing using RegEx
const replacedByRegex = announcement.replace(/Rome/, "Prague"); // Does not target all the occurrence of Target String.
console.log(replacedByRegex);

// Using Global parameter
const replacedByGlobalRegex = announcement.replace(/Rome/g, "Prague");
console.log(replacedByGlobalRegex);
console.log(replacedByGlobalRegex === replacedAllAnnouncement);

// Conversion
const priceIND = "₹17030";
const priceUS = "$" + String(Number(priceIND.slice(1)) * 0.012);
console.log(priceUS);

// Boolean outputs from the methods
console.log(airline.includes("Ind"));
console.log(airline.includes("ind"));
console.log(airline.includes("Jet"));

console.log(airline.startsWith("Fly"));
console.log(airline.startsWith("Air"));
console.log(airline.startsWith("F"));
console.log(airline.startsWith("f"));

console.log(airline.endsWith("a"));
console.log(airline.endsWith("A"));
console.log(airline.endsWith("India"));
console.log(airline.endsWith("india"));

console.log("--------------------------------------");
// Comparing lower case
console.log(airline.toLowerCase().includes("ind"));
console.log(airline.toLowerCase().includes("IND".toLowerCase()));

const checkBaggage = function (declaration) {
    const problemItems = ["gun", "guns", "alcohol", "knife"];
    problemItems.some(item => declaration.toLowerCase().includes(item))
        ? console.log("Someone call security 👮🏽")
        : console.log("Welcome!!!");
};

const decl1 = "I have Food, Gun, knife, A dog";
checkBaggage(decl1);

const decl2 = "Dog, food, Laptop";
checkBaggage(decl2);
console.log("----------------------------------");
//------------------------------------------------------------------------

// Split
let testStr = "This+is+a+Test+String";
console.log(testStr);
// using replace
console.log(testStr.replaceAll("+", " "));

// Using split
console.log(testStr.split("+"));
// Output: ['This', 'is', 'a', 'Test', 'String']

// Using destructuring
const [firstName, lastName] = "Rahul Jana".split(" ");
console.log(firstName, lastName);

// Join method, opposite os split
const fullName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(fullName);

// Capitalizing: raHul jAna -> Rahul Jana
const capitalizing = function (passengerName) {
    const splitedName = [...passengerName.toLowerCase().split(" ")];
    const nameEleArr = [];

    for (const nameEle of splitedName) {
        // nameEleArr.push(nameEle[0].toUpperCase() + nameEle.slice(1));

        // Better Optimized
        nameEleArr.push(nameEle.replace(nameEle[0], nameEle[0].toUpperCase()));
    }
    console.log(nameEleArr.join(" "));
    // console.log(
    //     [
    //         firstName[0].toUpperCase() + firstName.slice(1),
    //         lastName[0].toUpperCase() + lastName.slice(1),
    //     ].join(" ")
    // );
};
capitalizing("rAhul jaNa");

capitalizing(
    "barnaby marmaduke aloysius benjy cobweb dartagnan egbert felix gaspar humbert ignatius jayden kasper"
);

// Padding a String
testStr = "Good afternoon passengers.";
console.log(testStr.padStart(30));
//   padStart(maxLength: number, fillString?: string): string;
/*
default padding is empty space.
*/
console.log(testStr.padStart(30, "$"));

console.log(testStr.padEnd(30, "#"));

// Mask Credit Card
const maskCreditCard = function (cardNumber) {
    const cardString = String(cardNumber);
    const lastVisiblePart = cardString.slice(-4);
    return lastVisiblePart.padStart(cardString.length, "x");
};

console.log(maskCreditCard(123456789023));

// Repeat
console.log("This is a repeating message.\n".repeat(5));

// String Practice

const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//   🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightDetailsStr =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const indvFlightsList = flightDetailsStr.split("+");
console.log(indvFlightsList);
for (const filghtElement of indvFlightsList) {
    const status = filghtElement.split(";");

    const pointAStatus = status[1].slice(0, 3).toUpperCase();

    const pointBStatus = status[2].slice(0, 3).toUpperCase();

    const timings = status[3].replace(":", "h");

    const transitionStatus = status[0].replaceAll("_", " ");

    transitionStatus.includes("Delayed")
        ? console.log(
              `🔴${transitionStatus} ${pointAStatus} ${pointBStatus} ${timings}`
          )
        : console.log(`${pointAStatus} ${pointBStatus} ${timings}`);
}
