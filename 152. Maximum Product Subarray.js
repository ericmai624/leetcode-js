/*
Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  if (!nums || !nums.length) return 0;

  let max = nums[0];
  let min = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let n = nums[i];

    // if n is negative, swap max and min because bigger number times negative become smaller,
    // smaller number times negative become bigger
    if (n < 0) {
      let temp = max;
      max = min;
      min = temp;
    }

    max = Math.max(max * n, n);
    min = Math.min(min * n, n);
    res = Math.max(res, max);
  }

  return res;
};
