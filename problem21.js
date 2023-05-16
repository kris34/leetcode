var plusOne = function (digits) {
  const fromArray = digits.join(''); // get Digits out of Array
  const toInt = BigInt(fromArray) + BigInt(1); //Dont use parseInt, use BigInt instead :)
  const result = Array.from(String(toInt), Number); // return digits to array
  return result;
};

console.log(plusOne([9]));
