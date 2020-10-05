// using the given array
// var testArr = [6,3,5,1,2,4]

console.log('problem 1');
// print values and sum

var testArr = [6,3,5,1,2,4];
var sum = 0;
for(var i = 0; i < testArr.length; i++){
    console.log(testArr[i]);
    sum = sum + testArr[i];
    console.log(sum);
}

console.log('problem 2');
// multiply each value in the array by its array position

var testArr = [6,3,5,1,2,4];
for(var i = 0; i < testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);