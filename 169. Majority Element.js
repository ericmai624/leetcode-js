/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
  let major = 0
  let count = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[major]) {
      count++
    } else {
      count--
    }

    if (!count) {
      major = i
      count = 1
    }
  }

  return nums[major]
}
