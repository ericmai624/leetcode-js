/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, 
not the kth distinct element.
For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const sink = (arr, idx) => {    
  let parent = arr[idx];
  let left = idx * 2;
  let right = idx * 2 + 1;
  
  if (left > arr.length || right > arr.length) return;

  let leftChild = arr[left];
  let rightChild = arr[right];
  
  if (parent < leftChild) {
      swap(arr, idx, left);
      return sink(arr, left, left * 2, left * 2 + 1);
  }
  
  if (parent < rightChild) {
      swap(arr, idx, right);
      return sink(arr, right, right * 2, right * 2 + 1);
  }
};

const heapify = (arr) => {
  let size = arr.length;
  
  for (let i = size; i >= 0; i--) {
      let parentIdx = i % 2 ? (i - 1) / 2 : i / 2;
      let parent = arr[parentIdx];
      sink(arr, parentIdx);
  }
  
  return arr;
};

const findKthLargest = (nums, k) => {
  while (k) {
      heapify(nums);
      if (k === 1) return nums[0];
      k--;
      nums[0] = -Infinity;
  }
};