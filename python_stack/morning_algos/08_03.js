/*
 @param {String} str1
 @param {String} str2
 @return {Boolean}
 Are the two strings equal irrespective of case?
 */

function stringComp(str1, str2) {
    var nstr1 = str1.toUpperCase();
    var nstr2 = str2.toUpperCase();

    console.log(nstr1)
    console.log(nstr2)

    if (nstr1 == nstr2) {
        return "true";
    }
    else {
        return "false";
    }

}

z = stringComp("well", "WELL")
console.log(z)


/*
@param {String} str
@return {String} first letter of each "word" capitalized
*/

function acronyms(str) {
    var newStr = "";
    var arr = [];
    arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        newStr = newStr + arr[i].substring(0, 1);
    }
    return newStr.toUpperCase();
}
var myStr = "I hope this works!";
console.log(acronyms(myStr));

// or this option

function acronyms(str) {
    var newStr = str.split(' ');
    var acro = "";
    for (var i = 0; i < newStr.length; i++) {
        acro += newStr[i][0].toUpperCase();
    }
    return acro;
}

'hello'.toUpperCase(); // returns 'HELLO'

console.log(acronyms("there's no free lunch - gotta pay yer way."));
// should log 'TNFL-GPYW'
console.log(acronyms("Live from New York, it's Saturday Night!"));
// should log 'LFNYISN'


/*
@param {String} str
@return {String} characters in the reverse order
*/

function stringReverse(str) {
    var newStr = "";
    for (var i = str.length - 1; i <= 0; i--) {
        console.log(str[i]) // logs each character of the string
        newStr += str[i];
    }
    return newStr
}
console.log(stringReverse('this')); // should log 'siht'
console.log(stringReverse('something')); // should log 'gnihtemos'