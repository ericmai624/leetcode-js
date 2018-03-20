/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = root => {
  let sum = 0

  const dfs = (node, digitStr) => {
    if (!node) { return }
    if (!node.left && !node.right) {
      digitStr += node.val
      sum += Number(digitStr)
      return
    }

    if (node.left) {
      dfs(node.left, digitStr + node.val)
    }
    if (node.right) {
      dfs(node.right, digitStr + node.val)
    }
  }

  dfs(root, '')

  return sum
}
