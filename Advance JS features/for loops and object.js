// Iteration in arrays
const arr = [1, "yo", 2.5];

// This will result indexes
for(var ele in arr){
    console.log(ele)
}

console.log("----------------------");

// This will iterate through elements store in the arrays.
for(var ele of arr){
    console.log(ele)
}

// Iterating and accessing elements of a object.
// Object.keys()
// Object.values()
// Object.entries()

const car = {
    speed: 200,
    color: "red",
    wheelBase: 19
}

console.log(Object.keys(car));

console.log(Object.values(car));

console.log(Object.entries(car));


for(key of Object.keys(car)){
    console.log(key);
}

for(value of Object.values(car)){
    console.log(value);
}

// Dumb way
for(entry of Object.entries(car)){
    console.log(`${entry[0]}: ${entry[1]}`);
}

console.log("----------------------");

// Giga-chad way
for(key of Object.keys(car)){
    console.log(`➡ ${key}: ${car[key]}`);
}