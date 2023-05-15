function fibonacci(n) {
  let a = 0;
  let b = 1;

  let nums = [0, 1];

  for (let i = 0; i < n; i++) {
    let next = nums[i] + nums[i + 1];

    nums.push(next);
    console.log(next);
  }

  console.log(nums.join(' '));
}
console.log(fibonacci(20));
