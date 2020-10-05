/**
 * takes in a string
 * returns an object
 * with characters as keys
 * and the number of occurrences as values
 * 
 * how to determine if property is in object:
 * var obj = { someProp: 'some val' }
 * obj.hasOwnProperty('someProp') returns true
 */

// var obj = {};

// set a key/value pair
obj['secondKey'] = 'second val'

// get a value from an object
obj['secondKey'] // returns 'second val'

function freqTable(str) {
    var obj = {};
    for (var i in str) {
        var character = str[i];
        if (obj.hasOwnProperty(character)) {
            obj[character]++;
        }
        else {
            obj[character] = 1;
        }
    }
    return obj;
}
console.log(freqTable('abac')); // logs { a: 2, b: 1, c: 1 }
console.log(freqTable('deffd')); // logs { d: 2, e: 1, f: 2 }

/**
 * takes in a string
 * returns a string
 * with the "words" reversed
 */

function reverseWordOrder(str) {
    var arr = str.split(" "); //--> ['This', 'is', 'a' ,'test']
    var newStr = "";
    for (var i = arr.length - 1; i > 0; i--) {
        newStr += arr[i] + " ";
    }
    return newStr + arr[0];
}

console.log(reverseWordOrder('this statement'));
// should log 'statement this'
console.log(reverseWordOrder('This is a test'));
// should log 'test a is This'