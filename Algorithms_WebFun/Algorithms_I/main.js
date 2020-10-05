console.log('problem 1');

for(var i=0; i<5;i++){   
    console.log(i);
}

/*
var     val     console
i       0       0,1,2,3,4
*/

console.log('problem 2');

for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}

/*
var     val                    console
i       0->1->2->3->4->5       1,3,5
*/

console.log('problem 3');

for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

/*
var     val              console
i       0->3->4->7       3,7
*/

console.log('problem 4');

function y(num1, num2){
    return num1+num2;
}
console.log(y(2,3));
console.log(y(3,5));

/*
var     val     console
num1    2       5,8
num2    3
second function call
num1    3
num2    5
*/

console.log('problem 5');

function y(num1, num2){
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3));
 console.log(y(3,5));

 /*
 var    val     console
 num1   2       2,5,3,8
 num2   3
 second function call
 num1   3
 num2   5
 */

console.log('problem 6');

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);

/*
var     val     console
a       15      15,10,10

b       invoke function with value 10 --> 10
*/

console.log('problem 7');

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);

/*
var     val     console
a       15      15,10,20

b       function call with value 10 as 'a' --> 20
*/

console.log('predicted 7/7 correct!');