// Q5. write a function to determine whether a given string is a palindrome or not ?
// A5.

const isPalindrome = (word) => {
    
    let str = word.toLowerCase()
    let some= str.split('').reverse().join('')
    return str === some ? true : false;
}




console.log(isPalindrome('racecar'))
console.log(isPalindrome("hello Alok"))