// Q16. Write a function to convert a string to 
//      Camelcase & snakeCase.



const toCamelCase = (str) => {
      let strings = str.toLowerCase()
      .split(" ").map((curr,index)=>{

        if(index === 0){
            return curr;

        }else{
            return curr.charAt(0).toUpperCase()

            + curr.slice(1).toLowerCase()

        }
      })
      return strings.join("")
}


console.log(toCamelCase("hello lUcky alOK"));

// Snake_case

const toSnake_case = (para) => {
    let snake = para.toLowerCase().split(" ").replace(/\\s+/g, '')
    console.log(snake)
    return snake;

}


console.log(toSnake_case('Hello Lucky'))