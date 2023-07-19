"use strict";
//Write a TypeScript function that takes a number as input and returns the Fibonacci number for that number.
let input = 5;
function fibonacci(input) {
    if (input <= 0) {
        throw new Error("Input should be a positive integer");
    }
    else if (input === 1) {
        return 0;
    }
    else if (input === 2) {
        return 1;
    }
    let prevprev = 0;
    let prev = 1;
    let current = 0;
    for (let i = 3; i <= input; i++) {
        current = prevprev + prev;
        prevprev = prev;
        prev = current;
    }
    return current;
}
let results = fibonacci(input);
console.log(`The ${input} fibbonacci number is: `, results);
