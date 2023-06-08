//Write a program to reverse a string.

function ReverseString(input){
    const arrayString = input.split("");
    const revseArrayString = arrayString.reverse();
    const joinreverse = revseArrayString.join("")
    console.log(`Reverse of ${input} is ${joinreverse}`)
    
}
const input = "maria";
ReverseString(input);

