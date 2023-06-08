//Write a program to check if a string is a palindrome.

function CheckPalindrome(input){
    //convert into array and split the string
    const arrayValues = input.split('');
    const revseArrayValues = arrayValues.reverse();
    const reverseInput = revseArrayValues.join('');
    if(input == reverseInput){
        console.log(`${input} is palindrome`)
    }
    else {
        console.log(`reverse of ${input} is ${reverseInput} \n So ${input} is not Palindrome`)
    }

}
const input = "hello";
CheckPalindrome(input);