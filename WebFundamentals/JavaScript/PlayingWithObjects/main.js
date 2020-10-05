// var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log('problem 1');
// How would your print/log John's age?

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
users[1].age;
console.log(users[1].age);

console.log('problem 2');
// How would your print/log the name of the first object?

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log(users[0].name);

// this is for finding all the names
// for (var i=0; i < users.length; i++ ) {
//     console.log(users[i].name);
// }

console.log('problem 3');
//How would you print/log the name and age of each user using a for loop? 

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
for(var i =0; i < users.length; i++){
    console.log(users[i].name && users[i].age);
}