// Q19.  write a function to check if a given string starts
//       with a specific substring.

const startWith = (str,subStr) => {
     return str.toLowerCase().startsWith(subStr.toLowerCase())
    
}





console.log(startWith("Hello lucky", "Hello"));
console.log(startWith("World life", "World"));