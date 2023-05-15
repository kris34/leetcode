/* Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

 */

var sumOfMultiples = function (n) {
  if (n == 1 || n == 2) {
    return 0;
  }

  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      arr.push(i);
    }
  }
  let sum = arr.reduce(function (a, b) {
    return a + b;
  });

  return sum;
};

/* function sum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sum(7)); */
