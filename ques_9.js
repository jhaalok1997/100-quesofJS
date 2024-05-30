// Q9. write a function arraysAreEqual that takes two arrays
// arr1 and arr2 as input and returns true if the arrays are equal ?


const arraysAreEqual = (arr1,arr2) => {
    if(arr1.length!==arr2.length){
        return false;
    } 
    return arr2.every((curVal, index)=>curVal === arr1[index])
}

console.log(arraysAreEqual([1,2,3],[1,2,3]));
console.log(arraysAreEqual([1,2,3],[4,5,6]));
console.log(arraysAreEqual([],[]))