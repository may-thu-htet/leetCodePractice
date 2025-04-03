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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  function helperDfs(root, curSum) {
    if (!root) return false;
    curSum += root.val;
    if (!root.left && !root.right) {
      return curSum == targetSum;
    }
    return helperDfs(root.left, curSum) || helperDfs(root.right, curSum);
  }
  return helperDfs(root, 0);
};
