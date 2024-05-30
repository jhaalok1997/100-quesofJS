// Q2. we have to convert strings in # but the check is there it should be not more than 280 characters , capitalized[0] and concatinated together without spaces ?

// A2. "#MyNameIsAlokKumarJha"

const generateHash= (str) =>{
     if (str.length > 280 || str.trim().length === 0){
        return false;
     }

     const wordsplit = str.split(" ");
     const capital= wordsplit.map((word)=>word.replace(word[0],word[0].toUpperCase()))

      const xyz= `#${capital.join("")}`
     console.log(xyz);

     

    };

console.log(generateHash("my name is alok kumar jha"));   



