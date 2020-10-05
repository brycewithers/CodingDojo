// 1:

console.log(hello); // hello is undefined
var hello = 'world';

// prediction: undefined

// var hello; // 'hello' is a declaration, it's global and gets hoisted
// console.log(hello); // undefined
// hello = 'world'; // assign value to the global variable

// 2:

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// prediction: 'magnet'

// var needle; // 'needle' is a declaration, it's global and gets hoisted
// function test; // 'test' is a function and also gets hoisted
// needle = 'haystack'; // assign value to var needle --> global variable
// test(); // 'test()' is called
// var needle; // local variable within function is declared and hoisted
// needle = 'magnet' // assign value to local variable
// console.log(needle) // log the local variable 'needle'

// 3:

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Prediction: 'super cool'

// var brendan; // 'brendan' is a declaration, it's global and gets hoisted
// function print; // 'print' is a function and also gets hoisted
// brendan = 'super cool'; // assign value to global variable
// var brendan; // 'brendan' is a local variable within the 'print' function and is hoisted
// brendan = 'only okay'; // assign value to the local variable 'brendan'
// console.log(brendan); // this is referring to the global variable and therefore will read 'super cool'

// 4:

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// Prediction: 'chicken', 'half-chicken'

// var food; // 'food' is a declaration, it's global and gets hoisted
// function eat; // 'eat' is a function and gets hoisted
// food = 'chicken'; // assign value to the global variable
// eat(); // calls the function
// var food; // 'food' is a declaration, it's local and gets hoisted
// food = 'gone'; // assign value to local variable 'food'
// food = 'half-chicken' // // assign value to local variable 'food'
// console.log(food); // current local variable assigned to the value 'half-chicken'

// 5:

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// Prediction: undefined

// 6:

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// Prediction: undefined, 'rock', 'r&b', 

// var genre; // 'genre' is a declaration, it's global and gets hoisted
// function rewind; // 'rewind' is a function and is hoisted
// genre = 'disco'; // assign value to the global variable
// rewind(); // the function is called 
// var genre; // 'genre' is a declaration, it's local and is hoisted
// genre = 'rock'; // assign value to the local variable
// console.log(genre); // current value is 'rock'
// genre = 'r&b'; // assign value to the local variable
// console.log(genre); // current value is 'r&b'
// console.log(genre); // back to the global context, the current value of genre is 'disco'

// 7:

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// Prediction: 'san jose', 'seattle', 'burbank', 'san jose'

// function learn; // 'learn' is a function and it hoisted
// dojo = 'san jose'; // 'dojo' is a declaration, it's global and gets hoisted
// console.log(dojo); // 'dojo' is set to 'san jose'
// learn; // the function is called
// var dojo; // 'dojo' is a declaration, it's local and is hoisted
// dojo = 'seattle'; // assign value to the local variable
// console.log(dojo); // current value of the local variable is 'seattle'
// dojo = 'burbank'; // assign value to the local variable
// console.log(dojo); // current value of the local variable is 'burbank'
// console.log(dojo); // return to the global context and dojo is set to 'san jose'

// 8:

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// Prediction: {name: 'Chicago', students: 65, hiring: true}