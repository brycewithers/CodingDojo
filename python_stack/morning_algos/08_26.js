/*
 * @param {number[]} sortedArr a SORTED array of numbers
 * @param {number} searchVal a value to search for
 * @return {boolean} Is the value in the array?
 * BONUS: Do it without slice
 */

/* 
Plan of attack:
1.  we are going to create a function that takes two parameters
    a.  sortedArr
    b.  searchVal
2.  we are going to pick a midpoint in our given array and compare the value to the searchVal
3.  if the values match, return true 
4.  if the values do not match, search elsewhere
*/

/*
function binarySearch(sortedArr, searchVal) {
    // your code here
    var lowInd = 0;
    var highInd = sortedArr.length - 1;

    while (lowInd <= highInd) {
        var midInd = Math.floor((lowInd + highInd) / 2);
        if (searchVal == sortedArr[midInd]) {
            return true;
        }

        if (sortedArr[midInd] > searchVal) {
            highInd = midInd - 1;
        }
        else if (sortedArr[midInd] < searchVal) {
            lowInd = midInd + 1;
        }
    }

    return false;
}
*/

function rBinarySearch(sortedArr, searchVal) {
    // base case
    if (sortedArr.length == 0) {
        return false;
    }

    var lowInd = 0;
    var highInd = sortedArr.length - 1;
    var midInd = Math.floor((lowInd + highInd) / 2);

    // base case
    if (searchVal == sortedArr[midInd]) return true;

    if (searchVal > sortedArr[midInd]) {
        lowInd = midInd + 1;
    }
    else {
        highInd = midInd - 1;
    }

    return rBinarySearch(sortedArr.slice(lowInd, highInd + 1), searchVal)
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// [1, 2, 3, 4, 5].slice(1, 4) returns [2, 3, 4], which is a NEW ARRAY
// [1, 2, 3, 4, 5].slice(2) returns [3, 4, 5], which is a NEW ARRAY

console.log(rBinarySearch([1, 2, 3, 4, 5], 2)); // should log true
console.log(rBinarySearch([1, 2, 4, 5], 3)); // should log false



/*
* @param {string} str a string to reverse
* @return {string} a new string with the characters reversed
*/

function rStringReverse(str) {
    // your code here
    if (str.length == 0) {
        return "";
    }
    return rStringReverse(str.slice(1)) + str[0]
}

console.log(rStringReverse('hello')); // should log 'olleh'
console.log(rStringReverse('world')); // should log 'dlrow'

/*
function stringReverse(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        console.log(str[i]) // logs each character of the string
        newStr += str[i];
    }
    return newStr
}
*/