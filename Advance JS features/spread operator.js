const arr = [1,2,3,4,5,6,7,8];

function sumNumbers(x, y, z){  // takes only 3 args
    return x+y+z;
}

console.log(sumNumbers(...arr));

console.log(sumNumbers.apply(null, arr));

// taking all args
function sumAllNumbers(...rest){
    let total = 0;
    for(const arg of rest){
        total += arg;
    }
    return total;
}

console.log(sumAllNumbers(1,2,3,4,5,6,7,8));