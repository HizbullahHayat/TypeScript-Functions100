//10- Write a TypeScript function that takes an array of objects as input and returns the object with the highest property value.
function getObjectWithHighestPropertyValue(object, property) {
    if (object.length === 0) {
        return null;
    }
    var maxObject = object[0];
    var maxValue = maxObject[property];
    for (var i = 0; i < object.length; i++) {
        var currentValue = object[i][property];
        if (currentValue > maxValue) {
            maxObject = object[i];
            maxValue = currentValue;
        }
    }
    return maxObject;
}
var people = [
    { name: 'Ali', age: 33 },
    { name: 'Hamza', age: 22 },
    { name: 'Hizbullah', age: 20 },
];
var personWithHighestAge = getObjectWithHighestPropertyValue(people, "age");
console.log(personWithHighestAge);
