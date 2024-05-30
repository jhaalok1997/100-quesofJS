// Q1. We have to find the longest word in a sentence ?
// A1. "I have to practise more javascript questions"


const findthelongestword = (str)=> {
       if (str.trim().length === 0){  // trim method remove the spaces from both end of text
        return false;
       }
   
       Words = str.split(" ")
       .reduce((acc,curr)=> curr.length > acc.length ? curr : acc) // whenever sort is happen it use the format of AScII (Unicode) values
       return Words;
      
       
}


   console.log(findthelongestword
    ("I have to practise more javascript questions"));