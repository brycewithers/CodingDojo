console.log('problem 1');

function multiply(x, y) {
    console.log(x);
    console.log(y);
}
var b = multiply(2, 3);
console.log(b);

/* 
var     val     console
b       ?       2,3,undefined
x       2
y       3
*/

console.log('problem 2');

function multiply(x, y) {
    return x * y;
}
var b = multiply(2, 3);
console.log(b);
console.log(multiply(5, 2));

/*
var     val     console
b       ?->6    6,10
x       2
y       3
second function call
x       5
y       2
*/

console.log('problem 3');

var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) {
    i = i + 3;
    console.log(i);
}

/*
var     val                     console
x       [1, 2, 3, 4, 5, 10]     3,7
i       0->3->4->7->8
*/

console.log('problem 4');

var x = 15;
console.log(x);
function foo() {
    var x = 10;
    console.log(x);
}
console.log(x);
foo();
console.log(x);

/*
var     val     conosle
x       15      15,15,10,15
function call
x       10
*/

console.log('problem 5');

for (var i = 0; i < 15; i += 2) {
    console.log(i);
}

/*
var     val                 console
i       0->2->4...->16      0,2,4,6,8,10,12,14
*/

console.log('problem 6');

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log(i * j);
    }
}

/*
var     val     console
i       0->1       0,0,0,1,0,2
j       0->1->2
*/

console.log('problem 7');
    
function foo(x,y){
    for (var i = 0;  i < x; i++){
        for (var j = 0; j < x; j++){        
                console.log(i * j);       
        }
    }
}    
var z = foo(3, 3);
console.log(z);

/*
var     val     console
z       ?       0,0,0,0,1,2,0,2,4,undefined
x       3
y       3
i       0
j       0
*/

console.log('problem 8');
    
function foo(x,y){
    for(var i=0; i<x; i++){ // i < 3
        for(var j= 0; j<y; j++){ // j < 5       
            console.log(i * j) ;
        }
    }
    return x * y;
}
var z = foo(3,5);
console.log(z);

/*
var     val         console
z       ?->15       0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15
i       0->1->2->3->4
j       0->1->2->3->4->5
*/
         
console.log('problem 9');
/*
Please complete the codes below to have the function print all the integers from 1 to x.  If x is negative, have it print/log "negative number' and have the function return false.
*/
    
function printUpTo(x){
    if(x < 0){
        console.log('negative number');
        return 'false';
    }
    for(var i = 0; i <= x; i++){
        console.log(i);
    }
} 
// printUpTo(1000000); // should print all the integers from 1 to 1000000
var y = printUpTo(-10); // should return false
console.log(y); // should print false
    
console.log('problem 10');
/*
Please complete the code below to have the function print integers from 0 to 255 and with each integer print the sum so far.  Have the function return the final sum
*/

function printSum(x){
    var sum = 0;
    for(var i = 0; i <= 255; i++){
        console.log(i);
        sum = sum + i;
        console.log(i);
    }
    return sum;
}
var y = printSum(255); // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y); // should print 32640

/*
*/

console.log('problem 11');
/*
Please complete the code below to have the function return the sum of all the values in a given array.
*/
     
function printSumArray(x){
    var  sum =   0;  
    for(var i = 0; i < x.length; i++){
        sum = sum + x[i];
    }
    return sum;
}
console.log(printSumArray([1,2,7])); // should log 6