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
var diameterOfBinaryTree = function (root) {
  let res = 0;
  // return value SHOULD be the HEIGHT of the sub-tree, NOT the RESULT.
  // res is calculated in dfs function by adding the left and right result of the return HEIGHT value.
  function dfs(root) {
    if (!root) return 0;
    let leftL = dfs(root.left);
    let rightL = dfs(root.right);
    res = Math.max(res, leftL + rightL);
    return 1 + Math.max(leftL, rightL);
  }
  dfs(root);
  return res;
};
