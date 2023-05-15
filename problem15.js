fn = function greaterThan10(n) {
  return n > 10;
};

var filter = function (arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    
    if(fn(arr[i], i)){ 
      newArr.push(arr[i])
    }
  }

  
};

arr = [0, 10, 20, 30];
const newArray = filter(arr, fn);
