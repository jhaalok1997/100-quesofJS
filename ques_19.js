// Q19. write a function in which to reverse a string without pre-build libraries ?


const reverseString = (str) => {
    let r_str = "";
    for(let i= str.length - 1; i >= 0 ;i--){
      r_str += str[i] 
    }
    return r_str;
}



console.log(reverseString("lucky"))