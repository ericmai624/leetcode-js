/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

const generateParenthesis = n => {
  let res = [];

  gen(res, n);

  return res;
};

const gen = (res, n, left = 0, right = 0, depth = 0, str = '') => {
  if (depth === n * 2) {
    res.push(str);
    return;
  }

  if (left < n) {
    gen(res, n, left + 1, right, depth + 1, str + '(');
  }
  if (left > right) {
    gen(res, n, left, right + 1, depth + 1, str + ')');
  }
};

console.log(generateParenthesis(3));