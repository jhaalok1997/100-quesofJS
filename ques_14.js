// Q14. Write a function to calculate the sum of squares of all elements in an array.
//      Ex: the array [1,2,3], the function should return 14 because 1*1+2*2+3*3=1+4+9=14. 


const sumOfSquares = (sqr) => {
    
     return sqr.reduce((acc,curr) =>(
        acc + curr*curr
     ),0)
    
 
} 



console.log(sumOfSquares([1,2,3]));
console.log(sumOfSquares([1,2,3,4,5])) 