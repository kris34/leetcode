function solve(n) {
  let fibo = [0, 1];

  for (let i = 0; i < n; i++) {
    let next = fibo[i] + fibo[i + 1];
    fibo.push(next);
  }

  console.log(fibo);
}

solve(20);
