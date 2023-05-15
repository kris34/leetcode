function solve(arr) {
  let letft = 0;
  let right = 0;

  let result = [];

  for (let num of arr) {
    right += num;
  }

  for (num of arr) {
    right -= num;  //the sum of all elements after the current index
    result.push(Math.abs(letft - right));  
    letft += num;  
  }

  return result;
}

console.log(solve([10, 4, 8, 3]));
