/* 
Given an array of integers and an integer k, 
find out whether there are two distinct indices i and j 
in the array such that nums[i] = nums[j] and 
the absolute difference between i and j is at most k.

Example 1:

Input: [1,2,3,1], k = 3
Output: true
Example 2:

Input: [1,0,1,1], k = 1
Output: true
Example 3:

Input: [1,2,1], k = 0
Output: false
*/

const containsNearbyDuplicate = (nums, k) => {
  if (!k) {
    return false;
  }

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map[num] !== undefined) {
      if (i - map[num] <= k) {
        return true;
      }
    }

    map[num] = i;
  }

  return false;
};
