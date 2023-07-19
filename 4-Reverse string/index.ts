//Write a TypeScript function that takes a string as input and returns the reverse of the string.

let inputString= "hello world how are you"
function reverseString(inputString: string): string{
    let x = "";

    for(let i =inputString.length -1; i>=0; i--){
        x = x + inputString.charAt(i)
    }
    return x;
}
let y = reverseString(inputString);
console.log(y);
