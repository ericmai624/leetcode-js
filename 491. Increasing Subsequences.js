/*
Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2 .

Example:
Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
Note:
The length of the given array will not exceed 15.
The range of integer in the given array is [-100,100].
The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.
*/

const findSubsequences = nums => {
  let res = [];
  let output = [];
  let set = new Set();

  const gen = index => {
    if (output.length > 1) {
      let str = JSON.stringify(output);
      if (!set.has(str)) {
        res.push(output.concat());
        set.add(str);
      }
    }

    for (let i = index; i < nums.length; i++) {
      let curr = nums[i];
      if (!output.length || curr >= output[output.length - 1]) {
        output.push(curr);
        gen(i + 1);
        output.pop();
      }
    }
  };

  gen(0);

  return res;
};

console.log(findSubsequences([4, 6, 7, 7]));