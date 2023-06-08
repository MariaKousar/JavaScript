// Find the factorial of a number 

const num = 8;

// factorial of negative number doesn't exist
 if (num < 0){
    console.log("Error!Factorial of neagtive number doesn't exist");
 }
 else if (num === 0){
    console.log(`Factorial of  ${num} is  1`)
 }
 else{
    let fact = 1;
    for(i=1 ; i<=num ; i++){
        fact *= i;
    }
    console.log(`Factorial of ${num} is ${fact}`);
 }