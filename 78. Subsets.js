/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
const dfs = (nums, res, subset = [], index = 0) => {
  res.push(subset);

  for (let i = index; i < nums.length; i++) {
    dfs(nums, res, subset.concat(nums[i]), i + 1);
  }
};

const subsets = nums => {
  const res = [];

  dfs(nums, res);

  return res;
};
