/*
 * @param {String} str
 * @return {String} with the original "compressed"
 * if the "compressed" version IS NOT shorter,
 * return the original
 */

/*
Our plan of attack!
we are going to define a function that accepts the parameter string 'str'
 i=1 to length -1
aa bbbbbb cc

temp = a   b  c
count = 2  6  1...

result = a2

*/

function encode(str) {
    // empty
    if (str.length == 0) {

        return str;
    }
    // // not empty
    var resultStr = "";
    var tempChar = str[0];
    var count = 1;
    for (var i = 1; i < str.length; i++) {
        if (tempChar == str[i]) {
            count += 1;
        }
        else {
            resultStr += tempChar + count;
            count = 1;
            tempChar = str[i];
        }
    }
    // take care of the last char 
    resultStr += tempChar + count;
    // check length of result is less, then we are successful in compressing the string
    if (resultStr.length < str.length)
        return resultStr;
    else return str;
}
/*
var               val              console
str               'aabbbbbc'
resultStr         "a2b5"
count             0->1->2->1 ---> 1
temChar           ''->str[i]=a->str[2]->b --> c
i                 1->2
 */

console.log(encode('aabbbbbb')); // should log 'a2b6'
console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
console.log(encode('abbbaa')); // should log 'abbbaa'
console.log(encode('abc')); // should log 'abc'


/*
 * @param {String} str
 * @return {String} with the original "expanded"
 * 
 * parseInt('a') returns NaN
 * parseInt('5') returns 5
 * isNaN('c') returns true
 * isNaN(5) returns false
 */

function decode(str) {
    // your code here
    /*
        Plan:
        1. read each character from left to right
        2. if we see a numeric character we convert that to numeric and use it to loop thru
           2.a  Add the character to the result   
    
    */
    var resultStr = '';
    var tempChar = '';
    var numericChars = '';

    tempChar = str[0];
    for (var i = 1; i < str.length - 1; i++) {
        // is it numeric, save it to result
        if (isNaN(str[i])) {
            if (i < str.length - 1) {
                if (!isNaN(str[i + 1])) {
                    // save  a166b10
                    numericChars =  

        }
            }
            else {
                tempChar = str[i];
            }
        }


    }

    console.log(decode('a2b6')); // should log 'aabbbbbb'
    console.log(decode('a166b10')); // should log 'abbbbbbbbbb'