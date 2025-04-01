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
var levelOrder = function (root) {
  let res = [];
  let q = new Queue();
  q.push(root);

  while (!q.isEmpty()) {
    let level = [];
    for (let i = q.size(); i > 0; i--) {
      let cur = q.pop();
      if (cur !== null) {
        level.push(cur.val);
        q.push(cur.left);
        q.push(cur.right);
      }
    }
    if (level.length > 0) {
      res.push(level);
    }
  }
  return res;
};
