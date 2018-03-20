/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/

const minDepth = root => {
  if (!root) { return 0 }

  let res = 1
  let currLevel = []
  let nextLevel = []
  currLevel.push(root)

  while (currLevel.length) {
    for (let i = 0; i < currLevel.length; i++) {
      let node = currLevel.shift()
      if (!node.left && !node.right) {
        return res
      }

      if (node.left) {
        nextLevel.push(node.left)
      }

      if (node.right) {
        nextLevel.push(node.right)
      }
      i--
    }

    currLevel = nextLevel
    nextLevel = []
    res++
  }

  return res
}
