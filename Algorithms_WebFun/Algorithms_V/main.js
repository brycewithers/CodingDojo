console.log('problem 1');
/*
Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
*/

function noNegativity(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
var testArr = [0, -1, -2, 0, 1, 2, -3];
console.log(noNegativity(testArr));


console.log('problem 2');
/*
Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].
*/

function moveForward(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr.pop();
    arr.push(0);
    return arr;
}
var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(moveForward(myArr));


console.log('problem 3');
/*
Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].
*/

function reverseArr(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
var array = [1, 2, 3];
console.log(array);
console.log(reverseArr(array));


console.log('problem 4');
/*
Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.
For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
*/

function doubleTrouble(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}
var initial = [1, 2, 3, 4];
console.log(doubleTrouble(initial));
console.log(initial);