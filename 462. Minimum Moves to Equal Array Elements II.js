/*
Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1.

You may assume the array's length is at most 10,000.

Example:

Input:
[1,2,3]

Output:
2

Explanation:
Only two moves are needed (remember each move increments or decrements one element):

[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
*/

const minMoves2 = nums => {
  let sorted = nums.sort((a, b) => (a - b))
  let midIndex = Math.floor(sorted.length / 2)
  let mid = sorted[midIndex]
  let res = 0

  for (let i = 0; i < sorted.length; i++) {
    let value = sorted[i]
    res += Math.abs(value - mid)
  }

  return res
}

console.log(minMoves2([1, 2, 3]))
