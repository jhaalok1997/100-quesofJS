// Q4. write a function to sort an arry of numbers in an ascending order.

const sortAscending = (arr) => {
     let ascend = arr.sort((a,b)=>a-b)
     return ascend;
}




console.log(sortAscending([5,34,10,8]));
console.log(typeof sortAscending);