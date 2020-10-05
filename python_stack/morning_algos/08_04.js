//@param {String}
//@return {Booleans}

//is it valid?

//write a functions to read the string to see if parenthesis are valid
//for loop to go through the string

// define a function
// function will accept a parameter of a string
// the goal of the function is to find valid pairs of parentheses within our string

// first attempt: start with an 'if statement' and focus on the length of the string --> NOPE
// second attempt: let's iterate through the string

// Example 1: console.log(parensValid('(()))')); // should log false
// console.log(parensValid('((some)a)')); // should log true
// console.log(parensValid(')(')); // should log false
// console.log(parensValid('()()')); // should log true

function parensValid(str) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ')') {
            count -= 1;
        }
        else if (str[i] == '(') {
            count += 1;
        }
        if (count < 0) { return false; }
    }
    console.log(count);
    return (count === 0);
}
console.log(parensValid('((some)a)')); // should log true
console.log(parensValid(')(')); // should log false
console.log(parensValid('()()')); // should log true



// @param {String} str
// @return {Boolean} Are the braces valid?


function bracesValid(str) {
    var open_braces = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            open_braces.push(str[i]);
        }
        else if (str[i] == ')' || str[i] == '}' || str[i] == ']') {
            if ((str[i] == ')' && open_braces[open_braces.length - 1] == '(')
                || (str[i] == ']' && open_braces[open_braces.length - 1] == '[')
                || (str[i] == '}' && open_braces[open_braces.length - 1] == '{')) {
                open_braces.pop();
            }
            else {
                return false;
            }
        }
    }
    return open_braces.length == 0;
}

// console.log(bracesValid('{[()]}')); // should log true
// console.log(bracesValid('{[()}]')); // should log false
// console.log(bracesValid('{[a()b]c}')); // should log true
// console.log(bracesValid('{}[]()[(])')); // should log false