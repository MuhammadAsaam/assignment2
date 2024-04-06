//Using conditional statements, check if the number is: Even or Odd..
var num1: number = 7;

if (num1 % 2 == 0) {
    console.log(`this is even number.`);
} else {
    console.log(`this is odd number.`);
}


// Using conditional statements, check if the number is: Positive, Negative, or Zero.
let num2: number = 16;

if (num2 > 0) {
    console.log(`this is positive.`);
} else if (num2 < 0) {
    console.log(`this is negative.`);
} else {
    console.log(`this is zero.`);
}



// Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.
let num: number = 15;

if (num % 2 == 0 && num % 3 == 0) {
    console.log(`this number is divisible by both 2 and 3.`);
} else if (num % 2 == 0 && num % 3 != 0) {
    console.log(`this number is divisible by 2 but not by 3.`);
} else if (num % 2 != 0 && num % 3 == 0) {
    console.log(`this number is divisible by 3 but not by 2.`);
} else {
    console.log(`this number is not divisible by either 2 or 3.`);
}
 // Take the user age.
//   -- If the age is 18 or above:
//   -- Ask if they have a nationality of "Pakistani".
//     ---If yes, print "You are eligible to vote."
//     ---If no, print "Please obtain a valid ID to vote."
let age: number = 19;

if (age > 18) {
    console.log(`they have a nationality of "Pakistani`);
    console.log(`You are eligible to vote.`);
}  else {
    console.log(`Please obtain a valid ID to vote.`);
}



// Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)

let age2: number = 19;

if (age2 >= 0 && age2<=12) {
    console.log(`they are a child`);
}  else if(age2 >= 13 && age2<=19) {
    console.log(`they are a teenager`);
}else if(age2 >= 20 && age2<=59) {
    console.log(`they are a adult`);
}else if(age2 >= 60) {
    console.log(`they are a senior citizen`);
}





//  - Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.
//  - Check if a year is a leap year or not.