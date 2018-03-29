/*
Given a collection of candidate numbers (C) and a target number (T),
find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const dfs = (res, nums, set, target, idx = 0) => {
  if (target === 0) {
      res.push(set);
      return;
  } 
  if (target < 0) return;
  
  for (let i = idx; i < nums.length; i++) {
      if (i > idx && nums[i] === nums[i - 1]) {
          continue;
      }
      dfs(res, nums, set.concat(nums[i]), target - nums[i], i + 1);
  }
};

const combinationSum2 = (candidates, target) => {
  let res = [];
  
  dfs(res, candidates.sort((a, b) => a - b), [], target);
  
  return res;
};