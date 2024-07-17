// TODO: Function to check Odd/Even 
// Task -1

function checkOddEven(number){
    if (number%2 == 0) {
        console.log(`${number} is Even`);
    }else{
        console.log(`${number} is Odd`);
    }
}

// checkOddEven(10);


// TODO: Function to Calculate the square of a number and return the result
// Task - 2

function getSquare(number){
    const square = number * number;
    return square;
}

const result = getSquare(10);
console.log(`Result : ${result}`);
