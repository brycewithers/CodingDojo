console.log('problem 1');
// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterY(arr, Y) {
    //your code here
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count = count + 1;
        }
    }
    return count;
}
var count = greaterY([1, 5, 12, -9, 20, 30], 18);
console.log(count);

console.log('problem 2');
//Given an array, print the max, min and average values for that array.

function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
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

console.log('problem 3');
// Given an array of numbers, create a function that returns a new array where negative 
// values were replaced with the string ‘Dojo’.   
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

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

console.log('problem 4');
// Given array, and indices start and end, remove vals in that index range, working in-place 
// (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr,x,y) {
    for(var i = 0; i < arr.length - y - 1; i++){
        arr[i+x] = arr[i+y+1];
    }
    var numNeededToPop = y - x + 1; // numNeededToPop = 7 - 2 + 1 = 6
    for(var j =0; j < numNeededToPop; i++){
        arr.pop();
    }
    return arr;
}
var array = [2,5,3,-1,0,6,9,10,11];
console.log(removeVals(array,2,7));

/*
var         val
array       [2,5,3,-1,0,6,9,10,11]  
arr         [2,5,3,-1,0,6,9,10,11]->[2,5,11,-1,0,6,9,10,11]->
x           2
y           7
i           0->1
j           0->1->2->3->4->5               [2,5,11,-1,0,6,9,10]->[2,5,11,-1,0,6,9]->[2,5,11,-1,0,6]->[2,5,11,-1,0]->[2,5,11,-1]->[2,5,11]
*/