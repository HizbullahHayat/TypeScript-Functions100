// 8-Write a TypeScript function that takes an array of numbers as input and returns the minimum number in the array.
function findMinNum(a) {
    if (a.length === 0) {
        throw new Error("Please enter some number: ");
    }
    var minNum = a[0];
    for (var i = 0; i < a.length; i++) {
        if (minNum > a[i]) {
            minNum = a[i];
        }
    }
    return minNum;
}
var a = [55, 21, 44, 2, 11, 88, 9, 66, 3, 555, 8, 777, 111, 4];
var minNum = findMinNum(a);
console.log(minNum);
