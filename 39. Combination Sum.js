/*
Given a set of candidate numbers (C) (without duplicates) and a target number (T), 
find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7, 
A solution set is: 
[
  [7],
  [2, 2, 3]
]
*/
const dfs = (arr, remains, res, combo = [], index = 0) => {
  if (remains === 0) return res.push(combo);

  for (let i = index; i < arr.length; i++) {
    const n = arr[i];
    if (remains < n) return;
    dfs(arr, remains - n, res, combo.concat(n), i);
  }
}

const combinationSum = (candidates, target) => {
  const res = [];
  candidates.sort((a, b) => a - b);

  dfs(candidates, target, res);

  return res;
};
