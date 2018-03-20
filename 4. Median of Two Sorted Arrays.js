/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

const findMedianSortedArrays = (num1, num2) => {
  let arr = num1.concat(num2)

  let sorted = arr.sort((a, b) => a - b)
  let mid = (sorted.length - 1) / 2
  let median

  if (sorted.length % 2 === 0) {
    median = (sorted[mid - 0.5] + sorted[mid + 0.5]) / 2
  } else {
    median = sorted[mid]
  }

  return median
}

const bs = (arr, target, start, end) => {
  start = start || 0
  end = end || arr.length

  let mid = Math.floor((end - start) / 2) + start

  if (arr[mid] === target) {
    return mid
  } else if (start === end - 1) {
    return null
  } else if (arr[mid] > target) {
    return bs(arr, target, start, mid)
  } else if (arr[mid] < target) {
    return bs(arr, target, mid, end)
  }
}

let s = [10, 22, 38, 57, 100]

console.log(bs(s, 21))
