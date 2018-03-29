/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let sum = -Infinity;
  let curr = 0;
  
  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];
    
    sum = Math.max(sum, curr);
    
    if (curr < 0) curr = 0;
  }

  return sum;
};