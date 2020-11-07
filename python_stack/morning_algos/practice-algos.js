/*
 @param {String} str1
 @param {String} str2
 @return {Boolean}
 Are the two strings equal irrespective of case?
 */

function stringComp(str1, str2) {
    nStr1 = str1.toUpperCase();
    nStr2 = str2.toUpperCase();
    if (nStr1 == nStr2) {
        return true;
    } else {
        return false;
    }
}
console.log(stringComp('bryce', 'bruce'));
console.log(stringComp('RUnner', 'runneR'));
