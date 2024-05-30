// Q6. write a function findMax that takes an array of numbers as input
// and returns the maximum number in the array ?

const findMax = (num) => {
    let maxnum = Math.max(...num)
    return maxnum

}





console.log(findMax([1,5,3,9,2]));