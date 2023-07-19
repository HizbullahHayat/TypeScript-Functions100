//Write a TypeScript function that takes a number as input and returns the factorial of the number.

let n = 4;
function num_fac(n: number): number{
    if(n===0){
        return 1;
    }else{
        return n*num_fac (n-1);
    }
}
let results = num_fac(n);
console.log(results);