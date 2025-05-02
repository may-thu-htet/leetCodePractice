/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [root];

  while (queue.length) {
    let level = [];
    let levelSize = queue.length;
    while (levelSize) {
      let cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      level.push(cur.val);
      levelSize--;
    }
    res.push(level[level.length - 1]);
  }

  return res;
};
