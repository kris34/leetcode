var majorityElement = function (nums) {
  let numsObj = {};

  if (nums.length == 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    if (!numsObj.hasOwnProperty(nums[i])) {
      numsObj[nums[i]] = 1;
      continue;
    }
    numsObj[nums[i]]++;
  }
  let arr = Object.entries(numsObj);
  let most = 0;
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (most < arr[i][1]) {
      most = arr[i][1];
      result = arr[i][0];
    }
  }
  return result;
};

majorityElement([3, 2, 3]);
