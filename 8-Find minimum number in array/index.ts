// 8-Write a TypeScript function that takes an array of numbers as input and returns the minimum number in the array.

function findMinNum(a: number[]):number{
    if(a.length === 0){
        throw new Error("Please enter some number: ");
    }
    let minNum = a[0];
    for(let i=0; i<a.length; i++){
        if(minNum > a[i]){
            minNum = a[i];
        }
    }
    return minNum;
}
let a = [55,21,44,2,11,88,9,66,3,555,8,777,111,4];
let minNum = findMinNum(a);
console.log(minNum);