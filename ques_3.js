// Q3.  write a function called countChar that takes two parameters
// : string and charachter to count. how many times specified characters appears in the string ?

// A3. "Alokkumarjha","a"    count of 'a' we have to find.


const countChar =(str,char)=>{
    let word = str.toLowerCase().split('')
    .reduce((acc,curChar)=>{if(curChar === char)
        {
        acc++
        }
        return acc;
        },0)
        return word;
     }



      console.log(countChar("AlokkumarJha is my name","k"));