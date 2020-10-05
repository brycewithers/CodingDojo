// write an algorithm using loop(s) and predict the output

console.log('problem 1');
// print odds 1-20

for(var i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

/*
var     val
i       1

console
1, 3, 5, 7, 9, 11, 13, 15, 17, 19
*/

console.log('problem 2');
// sum numbers from 1 to 5, print out the current number and sum at each step

var sum = 0;
for(var num = 1; num <= 5; num++){
    console.log(num);
    sum = sum + num;
    console.log(sum);
}

/*
var     val
sum     0
num     1

console
1, 1, 2, 3, 3, 6, 4, 10, 5, 15
*/