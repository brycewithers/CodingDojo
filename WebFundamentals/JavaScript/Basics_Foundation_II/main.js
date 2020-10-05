console.log('problem 1');
// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "big";
        }
    }
    return arr; 
}
var newArr = makeItBig([1,2,3,-5,-8]);
console.log(newArr);

console.log('problem 2');
// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, 
// and return the highest value in the array.

function returnHigh(arr){
    var min = arr[0];
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}
var newArr = returnHigh([1,2,3,4,5]);
// console.log(newArr); use this line if you want to print the max value

console.log('problem 3');
// Print One, Return Another - Build a function that takes in an array of numbers.  
// The function should print the second-to-last value in the array, and return the first odd value in the array.

function firstOddNum(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            console.log(arr[arr.length - 2]);
            return arr[i];
        }
    }
}
var temp = firstOddNum([2,3,6,8,10]);
// console.log(temp); use this line if you want to print the print the first odd number in the array.

console.log('problem 4');
// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array 
// where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

var initial = [0,1,2,3];
function doubleArr(arr){
    var newArr = [];
    for(var i = 0; i < initial.length; i++){
        newArr[i] = initial[i];        
    }
    for(var i = 0; i < newArr.length; i++){
        newArr[i] = newArr[i] * 2;
    }
    return newArr;
}
console.log(doubleArr(initial));
console.log(initial);

console.log('problem 5');
// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  
// Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

var initial = [-1,1,1,1];
function countPositives(arr){
    var count = 0;
    for(var i = 0; i < initial.length; i++){
        if(initial[i] > 0){
            count += 1;
            initial[initial.length - 1] = count;
        }
    }
    return initial;
}
initial = countPositives(initial);
console.log(initial);

console.log('problem 6');
// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!".

function EvensAndOdds(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            if(arr[i + 1] % 2 == 0){
                if(arr[i + 2] % 2 == 0){
                    console.log("Even more so!");
                }
            }
        }
        if(arr[i] % 2 != 0){
            if(arr[i + 1] % 2 != 0){
                if(arr[i + 2] % 2 != 0){
                    console.log("That's odd!");
                }
            }
        }
    }
} 
var array = EvensAndOdds([1,2,3,4,4,4,5,5,5,6,7,8]);
console.log(array);

console.log('problem 7');
// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, 
// specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

var initial = [1,2,3,4,5,6,7,8];
function increment(arr){
    for(var i = 1; i < arr.length; i += 2){
        arr[i] = arr[i] + 2;
    }
    return arr;
}
var newArr = increment(initial);
console.log(newArr);

console.log('problem 8');
// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
// Working within that same array, replace each string with a number - the length of the string at the previous array index - 
// and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return 
// ["hello", 5, 4]. Hint: Can for loops only go forward?

// we are getting an array housing strings
// for each index replace it with the number(length) of the prior index 
// return new array

function newLength(arr){
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
var array = ["bryce","withers","25"];
console.log(newLength(array));


console.log('problem 9');
// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  
// Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    return newArr;
}
var initial = [0,2,3,4];
console.log(addSeven(initial));
// console.log(initial); test to see if original array was not altered

console.log('problem 10');
// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) 
// returns the same array, but now contains values reversed like so... [2,4,6,1,3]. Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for(var i = 0; i < arr.length / 2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
var array = [2,4,7,1,2,0,8];
console.log(array);
console.log(reverseArr(array));

console.log('problem 11');
// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, 
// but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNegative(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(-Math.abs(arr[i]));
    }
    return newArr;
}
var initial = [0,2,3,4];
console.log(outlookNegative(initial));
// console.log(initial); test to see if original array was not altered

console.log('problem 12');
// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
// If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
        }
        else {
            count++;
        }
    }
    if(count == arr.length){
        console.log("I'm hungry");
    }
}
var arr1 = [1,2,"food",3,4,5];
var arr2 = [0,"food",1,"food",2,3];
var arr3 = [1,2,3,4,5];
console.log(alwaysHungry(arr1));
console.log(alwaysHungry(arr2));
console.log(alwaysHungry(arr3));

console.log('problem 13');
// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
// Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
// swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardCenter(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    var temp2 = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp2;
    return arr;
}
var array = [1,2,3,4,5,6];
console.log(swapTowardCenter(array));

console.log('problem 14');
// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return 
// the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaletheArr(arr, num){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
var array = [2,4,6,8];
var num = 2;
console.log(scaletheArr(array, num));