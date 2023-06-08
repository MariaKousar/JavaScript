// Write a program to check if a given year is a leap year.

function Checkleapyear(year){
    if((year % 4 == 0 && year % 4 != 0) || (year % 400 == 0)){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year} is not a leap year`)
    }
}
const year = 2000;
Checkleapyear(year);