
// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function get_array() {
    var arr = [];
    for(var i = 1; i <=255; i++){
        arr.push(i);
    }
    return arr; 
}
var arrNew = [];
arrNew = get_array(); 
console.log(arrNew);

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

console.log('problem 2');
function sum_even_numbers(){
    var sum = 0;
    for(var i = 2; i <= 1000; i +=2){
            sum = sum + i;
        }
    return sum; 
}

var evenNum = sum_even_numbers();
console.log(evenNum);

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

console.log('problem 3');
function sum_odd_5000() {
    var sum = 0;
    for(var i = 1; i <= 5000; i += 2){
         sum = sum + i;   
        }
    return sum; 
}

var oddNum = sum_odd_5000();
console.log(oddNum);

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

console.log('problem 4');

function iterArr(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;    
}

var sumX =  iterArr([1, 2, 3]);
iterArr([1, 2, 3]);

console.log('Sum:', iterArr([1, 2, 3]));

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
console.log('problem 5');

function findMax(arr) {
    var max = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max; 
}
var max = findMax([1,4,7,-2,20]);
console.log(max);

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
console.log('problem 6');

function findAvg(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length; 
}
var avg = findAvg([2,5,7,13,40]);
console.log(avg);

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
console.log('problem 7');

function oddNumbers() {
    var arr = [];
    for(var i = 1; i < 50; i++){
        if(i % 2 === 1){
            arr.push(i);
        }
    }
    return arr; 
}
var newArr = oddNumbers();
console.log(newArr);

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
console.log('problem 8');

function greaterY(arr, Y) {
    //your code here
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            count = count + 1;
        }
    }
    return count; 
}
var count = greaterY([1,5,12,-9,20, 30], 18);
console.log(count);

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
console.log('problem 9');

function squareVal(arr) { 
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr; 
}
var newArr = squareVal([1,2,3,4,5]);
console.log(newArr);

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
console.log('problem 10');

function noNeg(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr; 
}
var newArr = noNeg([2,6,-1,0,-9,10]);
console.log(newArr);

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
console.log('problem 11');

function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
    return arrnew; 
}

var result = maxMinAvg([1, 2, 3]);
console.log(result);

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
console.log('problem 12');

function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr; 
}
var newArr = swap([1,2,3,4]);
console.log(newArr);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
console.log('problem 13');

function numToStr(arr) {
    //your code here
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr; 
}
var newArr = numToStr([1,-5,0,10,-3]);
console.log(newArr);