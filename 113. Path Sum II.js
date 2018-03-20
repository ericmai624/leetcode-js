/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @param {number} sum
 * @return {number[][]}
 */
const dfs = (node, result, p, s) => {
  if (!node.left && !node.right) {
    if (s === node.val) {
      result.push(p.concat(node.val))
    }
    return
  }

  if (node.left) {
    dfs(node.left, result, p.concat(node.val), s - node.val)
  }

  if (node.right) {
    dfs(node.right, result, p.concat(node.val), s - node.val)
  }
}

const pathSum = (root, sum) => {
  let result = []

  if (!root) {
    return result
  }

  dfs(root, result, [], sum)

  return result
}
