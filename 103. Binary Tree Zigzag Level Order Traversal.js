/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

const zigzagLevelOrder = root => {
  let res = [];

  if (!root) { return res; }
  
  let currDepth = 1;
  let tmp = [];
  let q = [];
  root.depth = currDepth;
  q.push(root);

  while (q.length) {
    let node = q.shift();
    if (node.depth > currDepth) {
      res.push(tmp);
      tmp = [];
      currDepth = node.depth;
    }

    if (node.depth % 2 !== 0) {
      tmp.push(node.val);
    } else {
      tmp.unshift(node.val);
    }

    if (node.left) {
      node.left.depth = currDepth + 1;
      q.push(node.left);
    }
    if (node.right) {
      node.right.depth = currDepth + 1;
      q.push(node.right);
    }
  }

  if (tmp.length) {
    res.push(tmp);
  }

  return res;
};