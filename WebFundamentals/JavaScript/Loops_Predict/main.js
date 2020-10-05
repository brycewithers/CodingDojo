// predict the outcome of the following code.

console.log('problem 1');

for(var num = 0; num < 15; num++){
    console.log(num);
}

/*
var     val
num     0->1->2->3->4->5->6->7->8->9->10->11->12->13->14

console
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
*/

console.log('problem 2');

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

/*
var     val
i       1->3->5->7->9 *i will become 11 and the the for loop will conclude

console
3, 9
*/

console.log('problem 3');

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

/*
var     val
j       1->2->4->5->6->8->9->10->11->12->14->15->16

console
1, 4, 5, 8, 10, 11, 14, 16
*/