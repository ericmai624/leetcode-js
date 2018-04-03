/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const dfs = (nums, res, set, prefix = []) => {
  if (prefix.length === nums.length) {
    return res.push(prefix);
  }

  for (let num of nums) {
    if (set.has(num)) continue;
    set.add(num);
    dfs(nums, res, set, prefix.concat(num));
    set.delete(num);
  }
};

const permute = nums => {
  const res = [];
  const set = new Set();

  dfs(nums, res, set);

  return res;
};