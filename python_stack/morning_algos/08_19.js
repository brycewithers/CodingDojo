/*
 * @param {number[]} sortedArr a SORTED array of numbers
 * @return {number[]} the same OR a new array "deduped"
 * 
 * BONUSES:
 * O(n): no nested loops, new array okay
 * In place (no new array)
 * In place and O(n): no nested loops
 * Keep it O(n) even if unsorted
 */

/* 
Plan of attack!
1.  we are going to define a function that will accept a parameter sortedArr - a sorted array of numbers - 
2.  we are either going to return a new array, or the same array, that will be 'deduped' --> no repeated integers
3.  lets create a for loop and iterate through the array
4.  we can create a variable that is a new array that will allow us to store the deduped array
    a.  checking each value
    b.  comparing each value to the next
    c.  
*/ 
/* 
var             val                     console
sortedArr   [1, 2, 3, 4, 4, 4, 5]
newArr      []->[1]
i           0

*/

function removeDuplicates(sortedArr) {
    // your code here
    var newArr = [1];
    for(var i = 0; i < sortedArr.length; i++){ /* This will loop through the entire array from front to back  */
        if(sortedArr[i] != sortedArr[i + 1]){ // conditional check: this if statement checks if the current value 'arr[i]' is equal to it's neighbor 'the next index'
            newArr.push(sortedArr[i]); // action: push to newArr the value of sortedArr[i] if the value is unique
        }
    }
    return newArr;  
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));
// should log [1, 2, 3, 4, 5]




/*
 * @param {number[]} intArr array of integers
 * @return {number|number[]}
 * 
 * if one number shows up with the highest frequency, return it
 * if all numbers show up the same number of times, return []
 * if multiple numbers have the same frequency, return them in an array
 */

/* 
Plan of attack!
1. check each value
2. check the frequency of that value in the array

*/

function findAllModes(intArr) {
    // your code here
    var newObj = {};
    var newArr = [];
    var count = 0;
    for(var i = 0; i < sortedArr.length; i++){ /* This will loop through the entire array from front to back  */ 
        if(intArr[i] == intArr[i + 1]){ // conditional check: this if statement checks if the current value 'arr[i]' is equal to it's neighbor 'the next index'
            newArr.push(intArr[i]); // action: push to newArr the value of sortedArr[i] if the value is unique
            count += 1;
        }
        else {
            continue; // Continue looping till the end of the array
        }
    }
    return newArr;  
}
}

console.log(findAllModes([1, 2, 3, 4])); // should log []
console.log(findAllModes([1, 1, 3, 4])); // should log 1
console.log(findAllModes([1, 1, 3, 4, 4])); // should log [1, 4]
