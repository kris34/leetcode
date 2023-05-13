var decodeMessage = function (key, message) {
  let charCode = 'a'.charCodeAt(0);
  const map = new Map();

  for (let i = 0; i < key.length; i++) {
    let char = key[i];

    if (map[char] == undefined && char != ' ') {
      map[char] = String.fromCharCode(charCode);
      charCode += 1;
    }
  }
  let result = ""

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    if (char == ' ') {
      result += char;
    } else {
      result += map[char];
    }
  }

  return result
};

decodeMessage(
  'the quick brown fox jumps over the lazy dog',
  'vkbs bs t suepuv'
);
