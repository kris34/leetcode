var interpret = function (command) {
  command = command.replaceAll('()', 'o');
  return command.replaceAll('(al)', 'al');
};
console.log(interpret('G()(al)'));
