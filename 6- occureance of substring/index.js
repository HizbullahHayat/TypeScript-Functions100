"use strict";
//Write a TypeScript function that takes a string as input and returns the number of occurrences of a given substring in the string.
function countOccurance(inputString, substring) {
    if (substring.length === 0) {
        throw new Error("Invalid input. string should not be empty");
    }
    let count = 0;
    let index = inputString.indexOf(substring);
    while (index != -1) {
        count++;
        index = inputString.indexOf(substring, index + 1);
    }
    return count;
}
let inputString = "hello hello, hi hello world";
let substring = 'hello';
let occurance = countOccurance(inputString, substring);
console.log(`So the occurance of substring "${substring}" is: `, occurance);
