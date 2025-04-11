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
var goodNodes = function (root) {
  function dfs(root, maxVal) {
    if (!root) return 0;
    let goodNodesNo = root.val >= maxVal ? 1 : 0;
    maxVal = Math.max(maxVal, root.val);
    goodNodesNo += dfs(root.left, maxVal);
    goodNodesNo += dfs(root.right, maxVal);
    return goodNodesNo;
  }

  return dfs(root, root.val);
};
