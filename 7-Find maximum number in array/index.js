//7- Write a TypeScript function that takes an array of numbers as input and returns the maximum number in the array.
function findMaxNum(a) {
    if (a.length === 0) {
        throw new Error("This array is empty: ");
    }
    var maxNumber = a[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > maxNumber) {
            maxNumber = a[i];
        }
    }
    return maxNumber;
}
var a = [44, 55, 88, 11, 4, 55, 99, 754, 5, 4, 3, 2, 1];
var maxNumber = findMaxNum(a);
console.log(maxNumber);
