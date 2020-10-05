/*
 * @param {number[]} sortedArr array of SORTED integers
 * @param {number} searchVal
 * @return {boolean}
 * 
 * Is the given value in the array?
 * DON'T ITERATE THROUGH THE ENTIRE ARRAY
 * you can use 'Math.floor' and/or 'Math.ceil'
 */

/* 
Plan of attack!
1.  build a function that will find a given number value in an array in sorted numbers
2.  do this without iterating through the entire array
3.  bisect the array -> find the middle!
4.  compare the value at the middle of the array to the value that we are looking for
5.  if greater than or less then check the array to the left or right of the index we are on
//  move the end index one below where we are or one above where we are
6.  if we find the value -> return true
7.  if we do not find the value -> return false
*/

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


console.log(binarySearch([1, 2, 3, 4, 5], 3));
// should log true

console.log(binarySearch([1, 2, 4, 5], 3));
// should log false

console.log(binarySearch([1, 2, 4, 5, 6, 7, 9], 3));
// should log false

/* 
var             val             console
sortedArr       [1, 2, 4, 5]
searchVal       3
check           2
i               3
*/

/*
 * BONUS: Once done, create this version
 * returns the number of occurrences of the value
 * 
 * @param {number[]} sortedArr array of SORTED integers
 * @param {number} searchVal
 * @return {number} the number of occurrences of the searched for value
 */

function binarySearchBonus(sortedArr, searchVal) {
    // your code here
}

console.log(binarySearchBonus([1, 2, 3, 4, 5], 3));
// should log 1

console.log(binarySearchBonus([1, 2, 4, 4, 4, 5], 4));
  // should log 3
