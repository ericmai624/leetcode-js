/*
Given a non-empty array containing only positive integers,
find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:
Each of the array element will not exceed 100.
The array size will not exceed 200.
Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
*/

const canPartition = nums => {
  let sumTotal = nums.reduce((a, b) => a + b)
  if (sumTotal % 2 === 1) {
    return false
  }
  let n = nums.length

  return isSubsetSum(nums, n, sumTotal / 2)
}

const isSubsetSum = (arr, n, sum) => {
  if (sum === 0) {
    return true
  } else if (n === 0 && sum !== 0) {
    return false
  } else if (arr[n - 1] > sum) {
    return isSubsetSum(arr, n - 1, sum)
  }

  return isSubsetSum(arr, n - 1, sum) || isSubsetSum(arr, n - 1, sum - arr[n - 1])
}
