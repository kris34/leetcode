var minimumSum = function (num) {
  let newNum = num.toString().split('').sort().join('');
  let num1 = '';
  let num2 = '';

  for (let i = 0; i < newNum.length; i+= 2) {
    num1 = num1 + newNum[i];
    num2 = num2 + newNum[i + 1];
  }

  return Number(num1) + Number(num2);
};

console.log(minimumSum(2932));
