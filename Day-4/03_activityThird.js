// TODO: Write a program to print number from 1 to 5 using do.. while loop 
//! Task - 1

// let num = 1;
// do{
//     console.log(num);
//     num++;
// }while(num<=5);



// TODO: Write a program to calculate the factorial of a number using do.. while loop 
//! Task : 2

let num = -5;
let fact = 1;


if(num < 0){
    console.log(`Factorial of Negative Number is not Defined !`);
    return;
}

do{

    if(num <= 1){
        break;
    }

    fact = fact*num;
    num--;
}while(num>0);

console.log(`Factorial is : ${fact}`);