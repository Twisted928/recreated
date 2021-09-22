function isValid(input) {
  if (!input.trim()) {
    return false;
  }
  let stack = [];
  let dict = { "]": "[", "}": "{", ")": "(" };
  let values = Object.values(dict);
  let isBreak = true;
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    if (values.includes(char)) {
      stack.push(char);
    } else if (dict[char]) {
      if (!stack.length || dict[char] !== stack.pop) {
        isBreak = false;
        break;
      }
    }
  }

  return isBreak;
}
