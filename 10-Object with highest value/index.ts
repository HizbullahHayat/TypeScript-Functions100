//10- Write a TypeScript function that takes an array of objects as input and returns the object with the highest property value.

function getObjectWithHighestPropertyValue<T>(object: T[], property: keyof T): T | null{
    if(object.length === 0){
        return null;
    }
    let maxObject: T = object[0];
    let maxValue = maxObject[property];

    for(let i=0; i<object.length; i++){
        let currentValue = object[i][property];

        if(currentValue > maxValue){
            maxObject = object[i];
            maxValue = currentValue
        }
    }
    return maxObject;
}
interface Person {
    name: string, age: number;
}

let people : Person[]=[
    {name: 'Ali', age: 33},
    {name: 'Hamza', age: 22},
    {name: 'Hizbullah', age: 20},
]

const personWithHighestAge = getObjectWithHighestPropertyValue(people, "age");
console.log(personWithHighestAge);