/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

const maxArea = height => {
  let start = 0;
  let end = height.length - 1;
  let maxWater = 0;

  while (start < end) {
    let h = Math.min(height[start], height[end]);
    let w = end - start;
    maxWater = Math.max(maxWater, h * w);
    height[start] <= height[end] ? start++ : end--;
  }

  return maxWater;
};

console.log(maxArea([1, 1]));