function numberOfSteps(num) {
  let steps = 0;

  if (num == 0) {
    return 0;
  }

  for (let i = num; i >= 0; i--) {
    if (num % 2 == 0) {
      num = num / 2;
      i = num;
      steps++;
    } else {
      num -= 1;
      i = num;
      steps++;
    }
  }

  return steps;
}

function steps(n) {
  let steps = 0;

  while (n > 0) {
    n % 2 == 0 ? (n /= 2) : n--;
    steps++;
  }

  return steps;
}

console.log(steps(14));
