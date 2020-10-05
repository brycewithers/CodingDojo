/*
 * @param {String} str
 * @return {Boolean} Is the string a palindrome?
 * Palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.
 */

// function parensValid(str) {
//     var count = 0
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == ')') {
//             count -= 1;
//         }
//         else if (str[i] == '(') {
//             count += 1;
//         }
//         if (count < 0) { return false; }
//     }
//     console.log(count);
//     return (count === 0);

/*
what is our goal?
we are going to define a function that will accept a parameter of a string
we will create a for loop to iterate through our string and confirm or deny that the string is a palindrome
we will either return 'true' or 'false'
*/

function isPalindrome(str) {
    var check = false;
    for (var i = 0; i < (str.length - 1) / 2; i++) {
        if (str[i] == str[str.length - 1 - i]) {
            check = true;
        }
        else {
            check = false;
        }
    }
    return check;
}

var test1 = isPalindrome('mom');
var test2 = isPalindrome('racecar');
var test3 = isPalindrome('nuinn');
console.log(test1);
console.log(test2);
console.log(test3);

/*
var     val     console
test1   'mom'
str     'mom'
check    false
i        2
*/

// Another approach!

function isPalindrome(str) {
    var BackwardsString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        BackwardsString += str[i];
        console.log(BackwardsString);
    }
    return BackwardsString === str;
}
var test1 = isPalindrome('mom');
var test2 = isPalindrome('Mom');
var test3 = isPalindrome('racecar');
var test4 = isPalindrome('nuinn');
console.log(test1);
console.log(test2);
console.log(test3);

// WOOOOOOAAAAAHHHHHHH



// console.log(isPalindrome('mom')); // should log true
// console.log(isPalindrome('Mom')); // should log false
// console.log(isPalindrome('this')); // should log false
// console.log(isPalindrome('mooom')); // should log true


/**
 * @param {String} str
 * @return {String} the longest palindrome in the given string
 */

function longestPalindrome(str) {
    var prevPalindrome = currPalindrome = '';
    // i sets lower bound of the string
    for (var i = 0; i < str.length; i++) {
        // j sets the upper bound of the string
        for (var j = str.length; j >= i; j--) {
            if (isPalindrome(str.slice(i, j))) {
                if (prevPalindrome.length < str.slice(i, j).length) {
                    prevPalindrome = str.slice(i, j);
                }
                break;
            }
        }
    }
    return prevPalindrome;
}