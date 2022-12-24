try{
    console.log(a+b);  // a and b now defined.
}catch{
    console.log("Value of a and b is no defined.");
}

console.log("Running next block;");
// throw new ReferenceError(); // deliberately throwing error.

// Saving errors:
try{
    console.log(a+b);  // a and b now defined.
}catch(err){
    console.log(err);
    console.log("...")
}
console.log("Programme keeps on running.")

 