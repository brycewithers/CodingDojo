/*
Given an arr and a separator, output a string of every item in the array separated by the separator.
The separator should only be between two elements.

join([1,2,3], ", ") => "1, 2, 3"
join([1,2,3]), "*") -> "1*2*3"
*/

/*
pass an array and a separator into a function
we are going to iterate an array
*/

function separator(arr,x){
    var myString = "";
    for (var i = 0; i < arr.length; i++){
        myString = myString + arr[i];
        if (i == arr.length - 1){
            break;
        }
        myString = myString + x;
    }
    return myString;
}
var newVar = separator([2,4,6,8], "+");
console.log(newVar);

/*
var             val             console
newVar          ?->
arr             [2,4,6,8]
x               "+"
myString        ""->"2"->"2+4+6+8"
i               3
*/

/* 
Array: Second-Largest
Return the second-largest element of an array. Given [42,1,4,Math.PI,7] , return 7 . If the array is too short, return null .

we need to id the max
we need to id the second max
build in a safety feature "null"
return the second max
*/

function secondLargest(arr){
    var max = arr[0];
    var nextUp = arr[arr.length - 1];
    if (arr.length < 2){
        console.log('array is too short!');
        return "null";
    }
    else {
        for (var i = arr.length - 1; i >= 0; i--){
            if (arr[i] > max){
                nextUp = max;
                max = arr[i];
            }
            if (arr[i] > nextUp && arr[i] < max){
                nextUp = arr[i];
            }
        }
        return nextUp;
    }
}
var myArr = [97,100,-4,3,98];
console.log(secondLargest(myArr));

// expected output: 50