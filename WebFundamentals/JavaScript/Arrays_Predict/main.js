// Predict the output!!!

console.log('problem 1');

var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

/* 
var     val
arr     [8,6,7,5,3,0,9]
i       0->1->2->3->4->5->6 *when i becomes 7 exit the for loop

console
8, 6, 7, 5, 3, 0, 9
*/

console.log('problem 2');

var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

/*
var     value
arr     [7,3,8,4,2,0,1]
i       0->1->2->3

console
"That is odd!", "That is odd!", 8, 4, 2, 0, "That is odd!" 
*/

console.log('problem 2');

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

/*
var     val
arr     [1,3,8,-5,0,-2,4,-1]->[-1,3,8,-5,0,-2,4,-1]-> [-1,-3,8,-5,0,-2,4,-1]-> [-1,-3,-8,-5,0,-2,4,-1]-> [-1,-3,-8,5,0,-2,4,-1]-> [-1,-3,-8,5,"zero",-2,4,-1]-> [-1,-3,-8,5,"zero",2,-4,-1]-> [-1,-3,-8,5,"zero",2,-4, 1] 
newArr  []->[-5, -2, -1]
i       0->1->2->3->4->5->6

console
[-1,-3,-8,5,"zero",2,-4, 1]
[-5, -2, -1]
*/