/*
Given a collection of numbers that might contain duplicates, 
return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
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

  for (let i = 0; i < nums.length; i++) {
    if (set.has(i)) continue;
    if (i > 0 && nums[i - 1] === nums[i] && !set.has(i - 1)) continue;
    set.add(i);
    dfs(nums, res, set, prefix.concat(nums[i]));
    set.delete(i);
  }
};

const permuteUnique = nums => {
  const res = [];
  const set = new Set();
  nums.sort((a, b) => a - b);

  dfs(nums, res, set);

  return res;
};