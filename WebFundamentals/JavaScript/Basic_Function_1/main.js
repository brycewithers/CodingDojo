console.log('score: 13/14');
console.log('revised score: 14/14');

/*I precdicted 13/14 snippets of code correctly. I accidentally had my console printing 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 and did not have it run 
though the function again*/

/*Predict the output of the following code snippets.  Please do NOT run any of this code directly, 
but first predict the output using the T-diagram.  If you're not used to using the T-diagram to run 
through the code yet, please get comfortable now.  This will help you down the line.  Once you've 
predicted the output for all of the codes, then run the code one by one and compare the two.

Please turn in a text file that includes your prediction for each problem and the actual output. 
At the top of the file, indicate how many out of 15 you predicted correctly.
*/

console.log('problem 1');

function a(){
    return 35;
}
console.log(a())

/*I predict that the above function, when called, will return 35. Becuase line 14 console.log's and calls the function the result should be 35.*/

console.log('problem 2');

function a(){
    return 4;
}
console.log(a()+a());

/*I predict that the above function, when called, will return 8. When the function is called, the resulting value is 4. Because the console.log has
specified that the function will be called, then again called, and for those two calls to be added together, my expectation is that "4 + 4 = 8"
*/

console.log('problem 3');

function a(b){
    return b;
}
console.log(a(2)+a(4));

/*
function parameter is 'b'
var     val     console
b       2       6
b       4       

I predict that the output of "console.log(a(2)+a(4))"" will be 6. When parameter 'b' is passed through the function, the function returns the value of 'b'. 
Seeing as how the console.log is waiting for the result of 2 parameters being added together, I predict that "2 + 4 = 6".
*/

console.log('problem 4');

function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));

/*
function parameter is 'b'
console.log 'b'
return value of function is 'b'*3

var     val     console
b       3       3
                9

I predict that the output of this code will be "3, 9". The function accepts parameter 'b' and console.log's that same value (3). It then returns the value
of 'b'*3 which would be "3 * 3 = 9. Therefore the console will read "3, 9".
*/

console.log('problem 5');

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));

/*
var     val     console
b       10      40

function parameter accepts 'b' and returns value 'b'*4. The following line of the function "console.log(b) is not read because of the above "return" statement.
I predict that the output of this code will be 40.
*/

console.log('problem 6');

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

/*
var     val     console
b       15      4

I predict that the output of this code will be 4. The funtion accepts parameter 'b' which is 15, it then sets up an 'if/else' statement(s) that dictace what 
the return value of the function will be. Parameter 'b' is 15, because that value does NOT meet the conditions of the 'if' statement, it by default goes to the 
'else' statement and returns 4. When the 'return' line is read, it does not read any further code within the function and exits the function.
*/

console.log('problem 7');

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10));

/*
var     val     console
b       3       10, 3, 30
c       10

I predict that the output of this code will be "10, 3, 30". The function accepts parameters 'b' and 'c'. The first "console.log(10,3)" does NOT invoke the function and 
the computer will log what we tell it to. This will be followed by the next line that invokes function and passes in the parameters 'b' and 'c' set to values '3' and '10'
respectively. The return value of the function is 'b'*'c' which would be "3 * 10 = 30".
*/

console.log('problem 8');

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

/*
var     val     console
n/a     n/a     3, 4

I predict that the output of this code will be "3, 4". The function itself is never actaully called upon and does not have any parameters passed through it thusfar.
Therefore the console will read what we tell it to and record 3 and then 4.
*/

console.log('problem 9');

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

/*
var     val                              console
i       0->2->3->5->6->8->9->11->12      2, 5, 8, 11

I predict that the output of this code will be "2, 5, 8, 11".
*/

console.log('problem 10');

function a(b,c){
    //      i=0; i<10
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

/*
var     val     console
b       0       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
c       10
i       0->1->2->3->4->5->6->7->8->9->10
"console.log(a(0,10))" this will log the identical as before!

I predict that the output of this code will be "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0". 
*/

console.log('problem 11');

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

/*
var     val     console
n/a     n/a     n/a

I predict that the outcome of the code will be nothing. The function is NOT called and there are no exterior variables, thusfar, 
that would be printed or reported.
*/

console.log('problem 12');

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

/*
var     val     console
z       10      10

I predict that the outcome of the code will be 10. We are given a variable 'z' that is set to be '10' and shown a function. However, that function is not invoked.
Therefore, we will not run the function and the computer will read the command "console.log(z)" which will show 10 in the console.
*/

console.log('problem 13');

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

/*
var     val     console
z       10      15, 10
new t diagram
z       15

I predict that the outcome of the code will be "15, 10". We are given a variable 'z' that is set to be a value of 10. We call a function that creates a new variable 'z' which 
is set to the value 15. Within the function, we tell the computer to "console.log(z)" which will print 15 in the console, we then exit the function and tell the computer to 
print variable 'z' in the console, which refers to our original value for 'z' which is 10.
*/

console.log('problem 14');

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

/*
var     val     console
z       10->15      15, 15 
(set 'z' to be equal to the product of function(a())...
new t diagram
z       15

I predict that the outcome of the code will be "15, 15". 
*/