var interpret = function (command) {
  let result1 = command.replaceAll('()', 'o');

  return result1.replaceAll('(al)', 'al')
};
interpret('G()(al)');
