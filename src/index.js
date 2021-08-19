module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (currentSymbol === bracketsConfig[j][0])
        stack.push(currentSymbol);
    }
    if (stack.length === 0)
        return false;

    let topElement = stack[stack.length - 1];

    for (let k = 0; k < bracketsConfig.length; k++) {
      if (currentSymbol === bracketsConfig[k][1] && topElement === bracketsConfig[k][0])
        stack.pop();
    }
  }
  return stack.length === 0;
}
