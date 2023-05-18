var climbStairs = function (n) {
  let arr = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr[n]);
};

climbStairs(8);
