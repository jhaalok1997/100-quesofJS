// Q8. write a function called calculateAverage that
// an array of numbers as input and returns the average of those numbers.


const calculateAverage = (avg) => {
    let cal = avg.reduce((acc,curr)=>acc + curr)
    return cal / avg.length;
}




console.log(calculateAverage([60,57,69,45,98]));