var climbStairs = function (n) {
  let one = 0;
  let two = 1;
  let result;

  for (let i = 1; i <= n; i++) {
    result = two + one;
    one = two;
    two = result;
  }
  return two
};

climbStairs(5);
