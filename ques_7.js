// Q7. we have to find the factorial of non- negative integer of n.




const factorial = (num) => {
     let factNum = 1;
     for(let i=1; i<=num; i++){
        factNum = factNum * i
     }
     return factNum;
}

console.log(factorial(5));
console.log(factorial(12));
console.log(factorial(4));