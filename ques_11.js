// Q11. write a function that takes an array of integers as input and removes any duplicate elements,
//  returning a new array with only the unique elements ? 

const removeDuplicate = (dup) => {
    let newarr = [...new Set(dup)]
    return newarr;

}


console.log(removeDuplicate([1,2,3,4,3,6,1]))
console.log(removeDuplicate(['a','b','c','a','d','e','b']))