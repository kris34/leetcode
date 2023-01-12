/* var interpret = function (command) {
  command = command.replaceAll('()', 'o');
  return command.replaceAll('(al)', 'al');
};
console.log(interpret('G()(al)')); */

var interpret = function (command) {
  let result = '';

  for (let i = 0; i < command.length; i++) {
    let char = command[i]
    if (command[i] == 'G') {
      result += 'G';
    } else if (command[i + 1] == ')') {
      result += 'o';
      i += 1;
    } else {
      result += 'al';
      i += 3;
    }
  }
  return result
};
interpret('G()(al)');
