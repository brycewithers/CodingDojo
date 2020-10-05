/*
 * @param {String} str
 * @param {Number} num
 * @return {String} a new string with the characters
 * rotated to the left by the given number
 * Note: the number can be greater than the string length
 */

function rotateString(str, num) {
    var rotation = num;

    // #2 - set the rotation if it is greater than length of string
    if (num > str.length) {
        rotation = num % str.length;
    }
    //                13      -     5     - 1 = 7
    var stop_at = (str.length - rotation) - 1;
    var left = '';
    // Loop thru to get left, start at the end and move x=rotation number of times to the left
    for (var i = str.length - 1; i > stop_at; i--) {
        left = str[i] + left;
    }
    console.log('stop at:', stop_at, 'left:', left);

    var right = '';
    // Loop thru to get left, start at the end and move x=rotation number of times to the left
    for (var i = stop_at; i >= 0; i--) {
        right = str[i] + right;
    }
    console.log('left:', left);

    return left + right;

}

console.log(rotateString('Boris Godunov', 5));
// should log 'dunovBoris Go'
console.log(rotateString('this', 5));
// should log 'sthi'


/*
 * @param {String} str1
 * @param {String} str2
 * @return {Boolean} Is the second string a rotation of the first?
 * See if you can optimize once you get it working.
 */

function isRotation(str1, str2) {
    // string lengths do not match
    if (str1.length != str2.length) {
        return false;
    }

    for (var i = 0; i < str1.length; i++) {
        // Rotate str1 by i and compare with str2 each time
        if (rotateString(str1, i) == str2) {
            // If the if-statement ever passes, we can exit the function with a true.
            return true;
        }
    }
    // If the if-statement never passed, we exit the function with a false.
    return false;
}

console.log(isRotation('Boris Godunov', 'dunovBoris Go'));
// should log true
console.log(isRotation('hello world', 'llo worldHe'));
  // should log false