var strStr = function (x, y) {
  let result = '';
  let arr = x.split('');

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == y[0]) {
      for (let j = i; j < y.length; j++) {
        result += arr[j];
      }

      if (result == y) {
        return result;
      }
    }

    result = '';
  }

  console.log(x.split(''));
};

console.log(strStr('saadbutsad', 'sad'));
