// Q12. write a function that takes a string as input and returns 
// the count of vowelsin the strings. consider "a","e","i","o","u" as vowels ?



const countVowels = (alpha) => {

    let vowels = ["a","e","i","o","u"];

    let check = alpha.split("");

    let count = 0;
    for(let char of check){
        if(vowels.includes(char.toLowerCase())){
            count++
        }
    }

    return count;

}

console.log(countVowels("Helloo World"));
console.log(countVowels("Lucky"));
