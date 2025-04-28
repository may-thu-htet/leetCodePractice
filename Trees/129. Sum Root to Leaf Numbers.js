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
 * @return {number}
 */
var sumNumbers = function (root) {
  let output = 0;
  function dfs(root, curSum) {
    if (!root) return;
    curSum = curSum * 10 + root.val;
    if (!root.left && !root.right) {
      output += curSum;
      return;
    }
    dfs(root.left, curSum);
    dfs(root.right, curSum);
  }
  dfs(root, 0);

  return output;
};
