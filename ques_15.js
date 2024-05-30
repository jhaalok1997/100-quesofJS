// Q15. Write a function findMin that takes an array of
// numbers as input and returns the minimum value found in the array ?

const findMin= (arr) => {
    let minval = Math.min(...arr);
    return minval;
}




console.log(findMin([5,10,2,8]));
console.log(findMin([5,-3,0,12,-23]));
console.log(findMin([5,10,2,-18.4,-18.4]));
console.log(findMin([])); // infinity
