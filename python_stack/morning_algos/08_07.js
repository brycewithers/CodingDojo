/**
 * @param {Object} obj input object
 * @return {Object} a new object
 * with the keys as values and values as keys
 * 
 * to iterate through an object's keys: for(var key in obj)
 * to get the value: obj[key]
 */

/*
we are going to define a function 
this function will accept a parameter object 'obj'
we need to iterate through the object and swap key-value pairs
*/

function invertHash(obj){
    var newObj = {};
    for(var key in obj){
        var value = obj[key];
        newObj[value] = key;
    }
    return newObj;
}

console.log(invertHash({ someKey: 'someVal' })); 
// should log { someVal: 'someKey' }

console.log(invertHash({
    key1: 'val1',
    key2: 'val2'
})); 
// should log { val1: 'key1', val2: 'key2' }


/**
 * @param {Array<String>} arr1 array of strings
 * @param {Array<String>} arr2 array of strings
 * @return {Object}
 * with the elements from the first as keys
 * and the elements from the second as values
 * 
 * NOTE: the two arrays are of equal length
 */

function zipArraysIntoMap(arr1, arr2) {
    var newObj = {};
    for (var i = 0; i < arr1.length; i++){
        newObj[arr1[i]] = arr2[i];
    }
    return newObj;
}

console.log(zipArraysIntoMap(['some', 'thing'], ['other', 'stuff']));
// should log { some: 'other', thing: 'stuff' }