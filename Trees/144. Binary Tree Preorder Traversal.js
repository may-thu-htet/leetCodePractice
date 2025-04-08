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
var preorderTraversal = function (root) {
  let res = [];
  // Recursive approach
  function preOrder(root) {
    if (!root) return;
    res.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  }
  preOrder(root);
  return res;

  // Iterative approach
  // let stack = [];
  // let cur = root;
  // while (cur !== null || stack.length !== 0) {
  //     if (cur !== null) {
  //         res.push(cur.val);
  //         stack.push(cur.right);
  //         cur = cur.left;
  //     } else {
  //         cur = stack.pop();
  //     }
  // }
  // return res;
};
