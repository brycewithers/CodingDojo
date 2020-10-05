/*
 * @param {number} num integer
 * @return {number} integer
 * the result of multiplying the number by all
 * the preceding numbers down to 1
 */

function rFactorial(num) {
    // your code here
    if (num == 0) {
      return 1;
    }
    return num * rFactorial(num - 1)
  }
  
  console.log(rFactorial(5)); // should log 120 (5 x 4 x 3 x 2 x 1)
  console.log(rFactorial(4)); // should log 24 (4 x 3 x 2 x 1)     num* fac(3)   3*fac(2)   2*fac(1)
  console.log(rFactorial(0)); // should log 1 (only 1 way to make 0 - multiplying 0 by any other number)

// base case: to stop the recursion (preventing an infinite loop)
// recursive call (the function calls itself inside the body)
// forward movement: bringing us closer to the base case


/*
 * @param {number} idx the index of the term to return
 * @return {number} the sum of the two previous terms
 * first two terms are 0, 1
 * subsequent terms are formed by adding the previous two terms
 * Terms: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
 * BONUS: keep track of your previous work with a default parameter
 */

function rFibonacci(idx) {
    // your code here
    if (idx < 0) {
      return false;
    }
    if (idx == 0) {
      return 0;
    }
    if (idx == 1) {
      return 1;
    }
    return rFibonacci(idx -1) + rFibonacci(idx -2);
  }

console.log(rFibonacci(2)); // should log 1 (1 + 0)
console.log(rFibonacci(3)); // should log 2 (1 + 1)
console.log(rFibonacci(7)); // should log 13 (8 + 5)

// BONUS CHALLENGE

function rFibonacci(idx, fibs = [0,1]) {
    // check to see if this value is already in our array
    if (idx < fibs.length) return fibs[idx];

    // if not in there, then calculate it
    var val = rFibonacci(idx - 1, fibs) + rFibonacci(idx -2, fibs);
    
    // put the value inside the array
    fibs[idx] = value;

    // return the calculated value
    return value;
}
console.log(rFibonacci(2)); // should log 1 (1 + 0)
console.log(rFibonacci(3)); // should log 2 (1 + 1)
console.log(rFibonacci(7)); // should log 13 (8 + 5)