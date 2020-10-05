/*
 * @param {number[]} intArr an array of integers
 * @param {number} i index, which defaults to 0
 * @return {number} the sum of all the elements
 */

/* NORMAL LOOP
function rSumArray(arr, i = 0) {
    // your code here
    var sum = 0;
    for (var j = j; j < arr.length; j++){
        sum += arr[j];
    }
    return sum;
}

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4
console.log(rSumArray([2, -4, 6], 1)); // should log 2
*/

// RECURSION!

function rSumArray(arr, i = 0) {
    if (i == arr.length) {
        return 0;
    }
    return arr[i] + rSumArray(arr, i + 1);
}

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4
console.log(rSumArray([2, -4, 6], 1)); // should log 2


/*
 * @param {number} num
 * @return {number} the sum from one up to and including the number
 */

/* 
plan of attack!
1.  given a number as an argument --> return the value of the sum of all integers up to and including the number 
2.  return the sum
*/

function rSigma(num) {
    // your code here
    if (num == 0) {
        return 0;
    }
    return num + rSigma(num - 1)
}

console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)
