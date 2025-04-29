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
var maxPathSum = function (root) {
  let maxSum = -Infinity;
  function dfs(root) {
    if (!root) return 0;

    let leftMax = Math.max(dfs(root.left), 0);
    let rightMax = Math.max(dfs(root.right), 0);
    // with split
    maxSum = Math.max(maxSum, root.val + leftMax + rightMax);
    // without split
    return root.val + Math.max(leftMax, rightMax);
  }
  dfs(root);
  return maxSum;
};
