/*
You need to find the largest value in each row of a binary tree.

Example:
Input:

          1
         / \
        3   2
       / \   \
      5   3   9

Output: [1, 3, 9]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = (root) => {
  let res = []
  if (!root) {
    return res
  }
  let curr = []
  let next = []
  curr.push(root)

  while (curr.length) {
    let max = -Infinity
    for (let i = 0; i < curr.length; i++) {
      max = Math.max(max, curr[i].val)
      if (curr[i].left) {
        next.push(curr[i].left)
      }
      if (curr[i].right) {
        next.push(curr[i].right)
      }
    }
    res.push(max)
    curr = next
    next = []
  }

  return res
}
