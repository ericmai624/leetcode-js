/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

const isValid = (s) => {
  let stack = []
  let pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (pairs[char]) {
      stack.push(pairs[char])
    } else if (!pairs[char] && stack.pop() !== char) {
      return false
    }
  }

  return stack.length === 0
}

console.log(isValid('()[]{}'))
console.log(isValid('([)]{}'))
console.log(isValid('['))
console.log(isValid(']'))
