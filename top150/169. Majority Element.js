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

var majorityElement = function(nums) {
    let map = {}
    let n = nums.length;
    
    for(let i of nums){
        if(!map[i]) {
            map[i] = 1;
        } else {
            map[i]++;
        }
        console.log(map[i]);
        if (map[i].value >= n/2) return i
    }
    console.log(map)
};

majorityElement([3,2,3])