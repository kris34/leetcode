var removeElement = function (nums, val) {
  let newNums = nums.filter((el) => el != val);   
  
  for (let i = 0; i < newNums.length; i++) {      
    nums[i] = newNums[i];
  }
 

  return newNums.length;
};

let k = removeElement([3, 2, 2, 3], 3);

console.log(k);
