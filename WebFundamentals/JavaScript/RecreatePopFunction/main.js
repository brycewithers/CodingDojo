console.log('problem 1');
// Recreate the pop method without using .pop(); Be sure to return the popped value.

function popElement(arr) {
   var x = arr[arr.length-1]; 
   arr.length = arr.length - 1;
   return x;
   
}

/*  Test the function   */
var arr1 = [4, 5, 7, 1];
var y = popElement(arr1);
console.log('Array:', arr1, ' y: ', y);

/*  
T Diagram

Variable            Value               Console
arr1            [4, 5, 7, 1]
y               0
after the call:
y               1                       
arr1                                    [4, 5, 7]
y                                       1


Call to function popElement(arr1)
arr             [4, 5, 7, 1]
x               1
arr             [4. 5, 7]
                return x



*/


console.log('problem 2');
// Array: Pop Front
// Create a function that, given an array, removes and returns the value at the beginning of the array. Do this without using any built-in array methods except pop()

function popFront(arr) {
    var x = arr[0]; 
    for(var i = 1; i < arr.length; i++){
        arr[i - 1] = arr[i];
    }
    arr.length = arr.length - 1;
    return x;
    
 }
 
 /*  Test the function   */
 var arr2 = [4, 5, 7, 1];
 var w = popFront(arr2);
 console.log('Array:', arr2, ' y: ', w);

 /*
T Diagram

Variable            Value                           Console
arr2                [4, 5, 7, 1] --> [5, 7, 1]
w                   4


call the function

arr                 [4, 5, 7, 1] --> [5, 7, 1, 1] --> [5, 7, 1] 
x                   4
i                   4

*/

