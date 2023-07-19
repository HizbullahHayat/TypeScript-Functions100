//2-Write a TypeScript function that takes a string as input and returns the number of vowels in the string.

let input = "hello world, i am a new practitioner of typescript";
function vowelsCount(vov: string){
    let vowels= ['a','e','i','o','u'];
    let count = 0;

    for (let i=0; i< vov.length; i++){                  //for(const char of input.toLowerCase)
        if(vowels.includes(input[i].toLowerCase())){    // if(vowels.includes(char))
            count++;
        }
    }
    return count;
}

let countVowel= vowelsCount(input);
console.log(countVowel);