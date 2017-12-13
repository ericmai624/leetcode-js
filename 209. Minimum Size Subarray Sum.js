/*
Given an array of n positive integers and a positive integer s, 
find the minimal length of a contiguous subarray of which the sum ≥ s. 
If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
*/

const minSubArrayLen = (s, nums) => {
  let len = Infinity;
  let sum = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    while (sum < s) {
      sum += nums[right++];
    }

    while (sum >= s) {
      len = Math.min(len, right - left);
      sum -= nums[left++];
    }
  }

  return len > nums.length ? 0 : len;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
