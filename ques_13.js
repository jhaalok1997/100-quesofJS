// Q13. Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two,
//      and false otherwise


const isPowerOfTwo = (num) => {
    let val = false;
    for(let i=1; i<=num; i++){
        if(2**i === num){
            val = true
        }
    }
     return val;
}

console.log(isPowerOfTwo(2));
console.warn(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));