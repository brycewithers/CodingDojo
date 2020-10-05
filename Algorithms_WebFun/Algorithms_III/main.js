console.log('problem 1');

function foo(x, y) {
    return 5;
}
console.log(foo(5, 5));

/*
var     val     console
x       5       5
y       5
*/

console.log('problem 2');

function foo(x, y) {
    var z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
var b = foo(2, 2)
console.log(b);
console.log(foo(6, 8));

/*
var     val            console
b       ?->[2,2,5]     [2,2,5],[2,2,5],[6,8,5],[6,8,5]
x       2
y       2
z       []->[2]->[2,2]->[2,2,5]

second function call
x       6
y       8
z       []->[6]->[6,8]->[6,8,5]
*/

console.log('problem 3');

function foo(x) {
    var z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
}
var y = foo(2);
y.push(5);
console.log(y);

/*
var    val                 console
y      ?->[2,2]->[2,2,5]   [2,2,5]
x      2
z      []->[2]->[]->[2]->[2,2]
*/

console.log('problem 4');

function foo(x) {
    if (x[0] < x[1]) {
        return true;
    }
    else {
        return false;
    }
}
var b = foo([2, 3, 4, 5])
console.log(b);

/*
var    val         console
b      ?->true     true
x      [2,3,4,5]
*/

console.log('problem 5');

function foo(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = "Coding"
        }
    }
}
console.log(foo([1, 2, 3, 4]));

/*
var     val
x       [1,2,3,4]->["Coding",2,3,4]->["Coding","Coding",3,4]->["Coding","Coding","Coding",4]->["Coding","Coding","Coding","Coding"]
i       0->1->2->3->4

console
["Coding","Coding","Coding","Coding"]
*/

console.log('problem 6');

function foo(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 5) {
            x[i] = "Coding";
        }
        else if (x[i] < 0) {
            x[i] = "Dojo";
        }
    }
}
console.log(foo([5, 7, -1, 4]));

/*
var     val
x       [5,7,-1,4]->[5,"Coding",-1,4]->[5,"Coding","Dojo",4]
i       0->1->2->3->4

console
[5,"Coding","Dojo",4]
*/

console.log('problem 7');

function foo(x) {
    if (x[0] > x[1]) {
        return x[1];
    }
    return 10;
}
var b = foo([5, 10])
console.log(b);

/*
var     val             console
b       ?->10           10
x       [5,10]
*/

console.log('problem 8');

function sum(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}

// nothing happens because the function is not called and no variable(s) exist outside of the function

// PART 2

console.log('problem 1');
// Analyze an array’s values and return the average of each respective array.

function printAverage(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    var avg = sum / x.length;
    return avg;
}
var y = printAverage([1, 2, 3]);
console.log(y); // should log 2
y = printAverage([5, 2, 8]);
console.log(y); // should log 5

console.log('problem 2');
// Create an array with all the odd integers between 1 and 255 (inclusive)

function returnOddArray() {
    var arr = [];
    for (var i = 1; i <= 255; i += 2) {
        arr.push(i);
    }
    return arr;
}
var y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]

console.log('problem 3');
// Square each value in a given array, returning that same array with changed values.

function squareValue(x) {
    for (var i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}
var y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]