// Q17.  write a function to check if a charater is upperCase
//       or lowerCase.



const isCheckCase = (str) => {
    if(str.charCodeAt(0) >= 65 && str.charCodeAt(0) <=90){
        return true + ' ' + 'Its UpperCase sir';
    }else{
        return false + " " + 'Its LowerCase sir';
    }
    return str;

}



console.log(isCheckCase("A"));
console.log(isCheckCase("z"));