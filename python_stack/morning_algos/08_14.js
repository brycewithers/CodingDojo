/*
 * @param {Array<Object>} newInv new inventory
 * @param {Array<Object>} currentInv current inventory
 * @return {Array<Object>} the current inventory after
 * updating it with the new inventory
 * new items get added; existing items have quantities changed
 */

/*if we want to add to an object
var my Obj = {
    myKey: 'my val'
}

for (var key in myObj){
    //key followed by value
    console.log(key, myObj[key])
}
*/

function updateInventory(newInv, currentInv) {
    for (var new_item of newInv) {
        var found_item = false;
        for (var curr_item of currentInv) {
            if (new_item['name'] === curr_item['name']) {
                curr_item['quantity'] += new_item['quantity'];
                found_item = true;
                break;
            }
        }
        if (!found_item) {
            currentInv.push(new_item);
        }
    }
    return currentInv;
}

console.log(updateInventory([
    {
        name: 'item',
        quantity: 1
    }
], [
    {
        name: 'item',
        quantity: 2
    }
]));
// should log [{ name: 'item', quantity: 3 }]

console.log(updateInventory([
    {
        name: 'item',
        quantity: 1
    }
], [
    {
        name: 'other item',
        quantity: 2
    }
]));
// should log [{ name: 'item', quantity: 1 }, { name: 'other item', quantity: 2 }]


/*
 * @param {String} str
 * @return {String} with the whitespace removed from both ends
 * whitespace characters: ' ', '\t', '\n'
 */

function trim(str) {
    // your code here
}

console.log(trim('  this   ')); // should log 'this'
console.log(trim('        multiline')); // should log 'multiline'
console.log(trim('this that')); // should log 'this that'


/*
 * @param {String} str1
 * @param {String} str2
 * @return {Boolean} Is the second string an anagram of the first?
 * Anagram: characters can be rearranged to make the same string
 * hint = think of a data structure that will allow us to check characters and keep track of them
 * function freqTable(str) {
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
 */

function isAnagram(str1, str2) {
    // your code here
}

console.log(isAnagram('Yes', 'eYs')); // should log true
console.log(isAnagram('silent', 'listen')); // should log true
console.log(isAnagram('ono', 'noa')); // should log false