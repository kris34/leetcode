var maximum69Number = function (num) {
  if (num == 9999 || num == 999 || num == 99 || num == 9) {
    return num;
  }


  let string = num.toString();

  for (let i = 0; i < string.length; i++) {
    if (string[i] == '9') {
      continue;
    } else {
      string = string.replace(string[i], '9');
      string = Number(string);
      if (string > num) {
        return string;
      }
    }
  }
};

console.log(maximum69Number(9669));
