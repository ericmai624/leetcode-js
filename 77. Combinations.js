/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

const combine = (n, k) => {
  let res = [];

  getCombos(n, k, res);

  return res;
};

const getCombos = (n, k, result, output = [], curr = 1) => {
  if (output.length === k) {
    result.push(output.slice());
    return;
  }

  if (curr > n) {
    return;
  }

  output.push(curr);
  getCombos(n, k, result, output, curr + 1);
  output.pop();
  getCombos(n, k, result, output, curr + 1);
};

console.log(combine(4, 2));
console.log(combine(2, 1));