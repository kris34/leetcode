var diagonalSum = function (mat) {
  let left = 0; //number of the left
  let right = mat.length - 1; //number on the right
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    //make for loop for the matrix which is 4 loops this time because we have 4 arrays
    if (left == right) {
      // if right crosses left we take left and add it to sum
      sum += mat[i][right];
    } else {
      sum += mat[i][left] + mat[i][right];
    }
    //we add 1 to left so it moves to the right and we remove 1 from right so it moves left
    left++;
    right--;
  }

  return sum
};

diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
