//9-Write a TypeScript function that takes an array of numbers as input and returns the average of the numbers in the array.

function averageNum(a: number[]){
    if(a.length === 0){
        throw new Error("Cannot calculate the average of an empty array ");
    }
    let sum = a.reduce((x , y) => x + y , 0);
    let average = sum / a.length;
    
    return average;
}
let a = [22,44,55,4,55,25,550];
let average= averageNum(a);
console.log(average);