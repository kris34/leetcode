function removeDuplicates(nums) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    //first create the correct final result as a seperate array
    if (newArr.includes(nums[i])) {
      continue;
    }
    newArr.push(nums[i]);
  }

  //push the correct order of the numbers infront cuz it doesent matter what comes
  //after them so the result will be [0,1,2,3,4, <- (this is the right answer)
  //undefined,0,0,1,1,1,2...]

  for (let i = newArr.length; i >= 0; i--) {
    nums.unshift(newArr[i]);
  }
   
  //return the length K of the final result
  return newArr.length;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
