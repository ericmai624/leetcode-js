/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1,
find the area of largest rectangle in the histogram.

Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
*/

/**
 * @param {number[]} heights
 * @return {number}
 */

const largestRectangleArea = heights => {
  let area = 0

  if (!heights || !heights.length) {
    return area
  }

  let stack = []

  for (let i = 0; i < heights.length; i++) {
    if (!stack.length || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i)
    } else {
      let height = heights[stack.pop()]
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
      area = Math.max(height * width, area)
      i--
    }
  }

  return area
}

// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([4, 6, 7, 5, 6, 3]))
