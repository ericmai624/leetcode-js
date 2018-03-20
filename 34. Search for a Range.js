/*
Given an array of integers sorted in ascending order,
find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

const searchRange = (nums, target) => {
  let range = [-1, -1]

  const bs = (start, end) => {
    if (start > end) {
      return -1
    }

    let mid = Math.floor((end - start) / 2) + start

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] > target) {
      return bs(start, mid - 1)
    }

    if (nums[mid] < target) {
      return bs(mid + 1, end)
    }
  }

  let center = bs(0, nums.length - 1)

  if (center === -1) {
    return range
  }

  range = expandFromCenter(nums, center)

  return range
}

const expandFromCenter = (nums, center) => {
  let left = center
  let right = center
  let target = nums[center]

  while (nums[left] === target || nums[right] === target) {
    if (nums[left] === target) {
      left--
    }
    if (nums[right] === target) {
      right++
    }
  }

  return [left + 1, right - 1]
}

let s = [5, 7, 7, 8, 8, 10]
console.log(searchRange(s, 8))
