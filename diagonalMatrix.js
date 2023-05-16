function diagonalMatrix(arr) {
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    
    if (arr[i][left] == arr[i][right]) {
      sum += arr[i][left];
    }

    sum += arr[i][left] + arr[i][right];

    left++;
    right--;
  }

  console.log(sum);
}

diagonalMatrix([
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
]);
