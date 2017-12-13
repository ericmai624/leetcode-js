/*
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

const topKFrequent = (nums, k) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    !map[key] ? map[key] = 1 : map[key]++;
  }

  let keys = Object.keys(map).sort((a, b) => (map[b] - map[a]));

  return keys.slice(0, k).map(el => Number(el));
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));