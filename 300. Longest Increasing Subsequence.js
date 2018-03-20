/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?
*/

const lengthOfLIS = nums => {
  let curr = res = len = 0
  let sorted = nums.sort((a, b) => a - b)

  for (let i = 0; i < sorted.length; i++) {
    let diff = sorted[i] - curr
    if (diff > res) {
      res = diff
      len++
    }
  }

  return len
}

const s = [10, 9, 2, 5, 3, 7, 101, 18] // => 4
