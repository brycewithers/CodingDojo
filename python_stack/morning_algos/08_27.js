/*
 * @param {number} num an integer
 * @return {number} a ONE-DIGIT integer
 * sum all the digits until the answer has only ONE DIGIT
 
 Plan:
     1. Base Case - when the sum of the digits is 1 digit, i.e. less than 10
     2. Recursive call, call the function back with the new sum
     3. forward movement, sum is getting less each time
 
 */

function rSumToOneDigit(num) {
    // your code here
    // Base Case
    if (num < 10) {
        return num;
    }
    var sum = 0;

    // get the sum  -- 99
    var numStr = num.toString(); // '19'
    for (var i = 0; i < numStr.length; i++)
        sum += parseInt(numStr[i]);

    return rSumToOneDigit(sum);
}
console.log(rSumToOneDigit(19));
// should log 1: 1 + 9 = 10 -> 1 + 0 = 1
console.log(rSumToOneDigit(999));
// should log 9: 9 + 9 + 9 = 27 -> 2 + 7 = 9

// Second solution:

function rSumToOneDigit(num) {
    if (num < 10) {
        return num;
    }
    return rSumToOneDigit(num - 1) % 9 - 1;
}
console.log(rSumToOneDigit(19));
// should log 1: 1 + 9 = 10 -> 1 + 0 = 1
console.log(rSumToOneDigit(999));
// should log 9: 9 + 9 + 9 = 27 -> 2 + 7 = 9

/*
var     val             console
num     9999            9
sum     0-> 36 -> 0
numStr  '9999'
i       0
*/

/*
 * @param {string} str the starting string
 * @param {string[]} anagrams an array of anagrams (default value is empty)
 * @param {string} partial a partial solution (default value is empty)
 * @return {string[]} an array of anagrams made from the original string
 * NOTE: the order of the individual strings inside the
 * returned array is unimportant; just make sure you get them all
 */

// Clue: 
// 'something'.slice(2, 4) returns a new string 'me'
// 'something' + 'else' returns a new string 'somethingelse'

function stringAnagrams(str, anagrams = [], partial = '') {
    // your code here
    if (str.length === 0) {
        if (partial.length === 0) {
            anagrams.push(partial);
        }
    } else {
        for (var i = 0; i < str.length; i++) {
            var char = str[i];
            var newStr = str.slice(0,i) + str.slice(i + 1);
            var newPartial = partial + char;
            stringAnagrams(newStr, anagrams, newPartial);
        }
    }
    return anagrams;
}
console.log(stringAnagrams('mi'));
// should log ['mi', 'im'] or ['im', 'mi']
console.log(stringAnagrams('mil'));
  // should log ['mil', 'mli', 'iml', 'ilm', 'lim', 'lmi']