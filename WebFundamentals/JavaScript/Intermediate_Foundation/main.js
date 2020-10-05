/*Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers 
up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).*/
console.log('problem 1');

function Sigma(num){
    var arr = [];
    var sum = 0;
    arr.push(num);
    for(var i = num - 1; i >= 0; i--){
        arr[i] = num;
        sum = sum + num;
        num = num - 1;
    }
    return sum;
}
var num1 = 4
var num2 = 6
console.log(Sigma(num1));
console.log(Sigma(num2));
console.log(Sigma(num1 + num2));

/*
var     val     console
num1    3
num     3->2->1->0
arr     []->[3, 2, 3]
sum     3
i       0
*/

/*Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) 
of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).*/
console.log('problem 2');

function Factorial(num){
    var arr = [];
    arr.push(num);
    for(var i = num - 1; i >= 0; i--){
        arr[i] = num;
        num = num - 1;
    }
    var sum = 1;
    for(var i = 0; i < arr.length; i++){
        sum = sum * arr[i];
    }
    return sum;
}
var num1 = 3
var num2 = 6
console.log(Factorial(num1));
console.log(Factorial(num2));
console.log(Factorial(num1 + num2));

/*Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, 
starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 
4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  
Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.*/
console.log('problem 3');



/*Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.*/
console.log('problem 4');

function secondTolast(arr){
    if(arr.length < 1 || arr.length == 1){
        return "null";
    }
    else {
        return arr[arr.length - 2];
    }
}
var array = ["my","name","is",2,5,7,"bryce"]
console.log(secondTolast(array));


/*Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.*/
console.log('problem 5');

function NfromArraysEnd(arr,num){
    if(arr.length < 1 || arr.length == 1 || arr.length - 1 < num){
        return "null";
    }
    else {
        return arr[arr.length - num];
    }
}
var array = ["hello","world!",2,4,"nice to meet you!",0,-2]
console.log(NfromArraysEnd(array,3));


/*Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.*/
console.log('problem 6');

function secondLargest(arr){
    var max = arr[0];
    var nextUp = arr[arr.length - 1];
    if(arr.length < 2){
        return "null";
    }
    else {
        for(var i = arr.length - 1; i >= 0; i--){
            if(arr[i] > max){
                nextUp = max;
                max = arr[i];
            }
            if(arr[i] > nextUp && arr[i] < max){
                nextUp = arr[i];
            }
        }
        return nextUp;
    }
}
var array = [80,-101,94,81,101,93];
console.log(secondLargest(array));

/*
var     val                     console
array   [80,-101,3,81,101,93]   93
arr     [80,-101,3,81,101,93]

max     arr[0] = 80->93->101
nextUp  arr[0] = 80->80->93

i       5->4->3->2->1->0

*/


/*Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  
Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].*/
console.log('problem 7');

function doubleTrouble(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}
var initial = [2,4,6,8];
console.log(doubleTrouble(initial));
console.log(initial);

/*
var         val             console
initial     [2,4,6,8]
arr         [2,4,6,8]
doubled     [2,2,4,6,]
i           1->2
*/