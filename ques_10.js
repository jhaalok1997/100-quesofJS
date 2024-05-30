// Q10.  write a function that takes a
// number as input and returns the sum of its digits 

const sumOfDigits = (num) => {
  let check = Array.from(String(num),Number)
  .reduce((acc,elem)=> acc + elem)
   return check 
}




console.log(sumOfDigits(1234)); //10
console.log(sumOfDigits(4567)); //22