/**
 * @param {Array<String>} arr
 * @param {String} separator
 * @return {String} a string connecting all the array
 * elements with the given separator
 */

/*
we are going to create a function that accepts two parameters:
1: array of strings
2: a separator
we are going to return a string with all the given elements connected by the separator
*/

function join(arr, separator) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            str += arr[i];
        }
        else {
            str += arr[i] + separator;
        }
    }
    return str;
}

console.log(join(['a', 'b', 'c'], '|')); // should log 'a|b|c'
console.log(join(['a', 'b', 'c', 'd'], '? ')); // should log 'a? b? c? d'
console.log(join(['a', 'b', 'c'], ',,')); // should log 'a,,b,,c'


/**
 * @param {Array<Number>} arr a SORTED array of UNIQUE integers
 * @return {String} a string connecting all the consecutive page
 * ranges with a comma and a space
 */

/*
we are going to create a function that accepts a parameter of a sorted 'unique' array of integers
we are going to iterate through the array and look for consecutive page ranges (can be any length)
return a string that will connect consecutive pages with a comma and a space 
*/

// function bookIndex(arr) {
//     var str = "";
//     var connector = "-";
//     var comma = ", ";
//     var start = arr[0];
//     for (var i = 0; i < arr.length; i++){
//         if (i == arr.length -1 && arr[i] - 1 == arr[i -1]){
//             str += start + connector + arr[i];
//         }
//         else if (arr[i] + 1 == arr[i + 1]){
//             continue;
//             // str += arr[i] + connector + arr[i + 1];
//         }
//         else {
//             if (i == arr.length - 1){
//                 str += start + connector + arr[i];
//             }
//             else if (i != arr.length - 1){
//                 str += start + connector + arr[i] + comma;
//             }
//             else {
//                 str += arr[i] + comma;
//             }
//             start = arr[i + 1];
//         }
//     }
//     return str;
// }
// console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
// // should log '1-3, 5-7, 10-11'
// console.log(bookIndex([5, 10, 11, 12])); // should log '5, 10-12'

/*
var         val                             console
arr         [1, 2, 3, 5, 6, 7, 10, 11]      
str         ""->"1-3, "->"1-3, 5-7, "
connector   "-"
comma       ", "
start       arr[0]->arr[3]->arr[6]
i           0->1->2->3->4->5->6->7
*/

function bookIndex(arr) {
    var myStr = "";
    var firstnum = arr[0];
    var lastnum;
    for (var i = 0; i < arr.length; i++) {
        // if it is not consecutive, (top end of range becomes current index)
        if (!(arr[i] + 1 == arr[i + 1])) {
            lastnum = arr[i];
            // This if statement is for checking for last element (don't add ", " at the end)
            if (i == arr.length - 1) {
                // Checks for cases where "-" is not needed. i.e. [5,10,12] -> logs "5, 10, 12"
                if (firstnum == lastnum) {
                    myStr += firstnum;
                }
                // Else, "-" added to consecutive set of numbers
                else {
                    myStr += firstnum + "-" + lastnum;
                    firstnum = arr[i + 1];
                }
            }
            // separates the strings, rather than first index/last index.
            else {
                // Checks if the index is single, non-consecutive.
                if (firstnum == lastnum) {
                    myStr += firstnum + ", "
                    firstnum = arr[i + 1];
                }
                // Else, "-" added to consecutive set of numbers
                else {
                    myStr += firstnum + "-" + lastnum + ", ";
                    firstnum = arr[i + 1];
                }
            }

        }
    }
    return myStr
}

console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
console.log(bookIndex([5, 10, 11, 12]));