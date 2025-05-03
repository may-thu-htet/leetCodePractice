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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let q = [root];
  let LToR = true;

  while (q.length) {
    let level = [];
    let levelSize = q.length;

    while (levelSize) {
      let cur = q.shift();
      if (LToR == true) {
        level.push(cur.val);
      } else {
        level.unshift(cur.val);
      }
      if (cur.left) q.push(cur.left);
      if (cur.right) q.push(cur.right);
      levelSize--;
    }
    LToR = !LToR;
    res.push(level);
  }
  return res;
};
