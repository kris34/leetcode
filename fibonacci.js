function fibonacci(n) {
  let result = [0, 1];

  for (let i = 0; i < n; i++) {
    let newNum = result[i] + result[i + 1];
    result.push(newNum);
  }

  console.log(result);
}

fibonacci(20);
