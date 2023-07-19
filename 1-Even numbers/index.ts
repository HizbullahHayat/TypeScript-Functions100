//1-Write a TypeScript function that takes an array of numbers as input and returns the sum of the even numbers in the array.

let num = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66];
function arrayNumbers(num: number[]){
    let sum = 0;
    for(let i=0; i<num.length; i++){
        if(num[i] % 2 === 0){
            sum += num[i]
        }
    }
    return sum;
}

let results = arrayNumbers(num);
console.log(results)