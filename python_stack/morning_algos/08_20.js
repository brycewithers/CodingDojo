/*
 * @param {number} cents integer "cents"
 * @return {Object<string,number>} an object with coin denominations
 * each coin amount (starting from the highest
 * denomination) should be maximized
 * the total NUMBER of coins should be minimized
 */

function coinChange(cents) {
    // your code here
    var newObj = {};
    // newObj['quarters'] = 0 -> newObj = {'quarters': 0}

    var num_quarters = Math.floor(cents / 25);
    var remainder = cents % 25;

    var num_dimes = Math.floor(remainder / 10);
    remainder = remainder % 10;

    var num_nickels = Math.floor(remainder / 5);

    var num_pennies = remainder % 5;

    newObj['quarters'] = num_quarters;
    newObj['dimes'] = num_dimes;
    newObj['nickels'] = num_nickels;
    newObj['pennies'] = num_pennies;

    return newObj;
}

console.log(coinChange(7));
// should log { quarters: 0, dimes: 0, nickels: 1, pennies: 2 }
console.log(coinChange(27));
// should log { quarters: 1, dimes: 0, nickels: 0, pennies: 2 }


/*
 * @param {number[]} arr an UNSORTED array of integers
 * @return {number|null} either the "missing" CONSECUTIVE number
 * or null if there is no missing number
 * BONUS: take in a second `step` parameter
 * to specify gaps in between the numbers
 */

function missingValue(arr) {
    var obj = {};
    var max = arr[0], min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
        if (max < arr[i]) { max = arr[i]; }
        if (min > arr[i]) { min = arr[i]; }
    }

    for (var i = min + 1; i < max; i++) {
        if (obj.hasOwnProperty(i) == false) {
            return i;
        }
    }
    return null;
}

console.log(missingValue([2, 0, 3]));
// should log 1 (in order, we'd have 0, 2, 3)
console.log(missingValue([1, 0, 3, 2]));
// should log null (in order, we'd have 0, 1, 2, 3)
console.log(missingValue([-3, 3, -2, 0, 2, 1]));
  // should log -1 (in order, we'd have -3, -2, 0, 1, 2, 3)