// TODO: Function Expression to find the max of two number and log the result to console
//! Task - 3

const maxNumber = function(number1, number2){

    if (number1 > number2) {
        console.log(`Max Number is : ${number1}`);
    }else{
        console.log(`Max Number is : ${number2}`);
    }
}

// calling function
// maxNumber(5,3);


// TODO: Function Expression to concatenate two strings and return the result
//! Task - 4

const concatenateString = function concateStr(stringOne,stringTwo){
    const result = stringOne + stringTwo;
    return result;
}


const result = concatenateString('Hello ','Abhishek');
console.log(`Result is : ${result}`);
