/*
 * @param {String} str
 * @return {String} with only the last instance of each character
 * NOTE: the character order should be preserved
 */

// function dedupe(str) {
//     var newStr = "";
//     for (var i = str.length - 1; i >= 0; i--){
//         var character = str[i];
//         if (str.hasOwnProperty(character)){
//             newStr += str[i];
//         }
//         else{
//             continue;
//         }
//     }
//     return newStr;
// }
/*
we are going to define a function that will accept a parameter string 'str'
we need return a new string that contains all LAST instances of characters from the original
to do so:
1:  */

function dedupe(str){
    var newObj = {};
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--){
        var character = str[i];
        if (newObj.hasOwnProperty(character) == false){
            newObj[character] = true;
            newStr = character + newStr;
        }
    }
    return newStr;
}

console.log(dedupe('abac')); // should log 'bac'
console.log(dedupe('Snaps! crackles! pops!'));
// should log 'Snrackle ops!'


/*
 * @param {String} str
 * @return {String} with individual "words" reverse
 */

// function reverseWords(str) {
//     var newArr = [];
//     var newStr1 = "";
//     var newStr2 = "";
//     for (var i = str.length - 1; i >= 0; i--){
//         // var character = str[i];
//         newStr1 += str[i];
//         if (str[i] ==''){
//             newArr.push(newStr1);
//         }
//         if (str[i] = 0){

//         }
//     }
// }

function reverseWords(str) {
    var wordsArr = str.split(" ");
    var newStr = "";

    for (var i = 0; i < wordsArr.length; i++) {
        for (var j = wordsArr[i].length - 1; j >= 0; j--) {
            newStr += wordsArr[i].charAt(j);
        }
        if (i != wordsArr.length - 1) {
            newStr += " ";
        }
    }
    return newStr
}

console.log(reverseWords("hello")); // should log 'olleh'
console.log(reverseWords('this that')); // should log 'siht taht'
