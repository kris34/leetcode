var countDigits = function (num) {
  let count = 0;
  let string = String(num);

  for (let n of string) {
    n = Number(n);

    if (num % n == 0) {
      count++;
    }
  }
  return count
};
countDigits(1248);
