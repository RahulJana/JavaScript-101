let cars = ["Saab", "Volvo", "BMW"];  // Literal syntax


function letterFinder(word, match){
    for(let i = 0; i<word.length; i++){
        if(word[i] == match){
            console.log('Found the', match, 'at', i);
        }else{
            console.log('---No match found at', i);
        }
    }
}

// letterFinder("test", "t")


const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adding/Pushing element.
fruits[fruits.length] = "Pineapple";  // Adds "Lemon" to fruits
console.log(fruits);

// Adding elements with high indexes can create undefined "holes" in an array:
fruits[10] = "Mango";
console.log(fruits);
