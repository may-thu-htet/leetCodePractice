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
var getMinimumDifference = function (root) {
  let minDiff = Infinity;
  let cur = root;
  let stack = [];
  let pre = null;

  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (pre !== null) {
      minDiff = Math.min(cur.val - pre, minDiff);
    }
    pre = cur.val;
    cur = cur.right;
  }
  return minDiff;

  // RECURSIVE
  //     function inorder(root){
  //     if(!root)return;
  //     inorder(root.left);
  //     result.push(root.val)
  //     inorder(root.right);
  //     }
  //     inorder(root);
  //     console.log(result)
  //    for(let i = 1; i < result.length; i++){
  //     minDiff = Math.min(result[i] - result[i - 1], minDiff);
  //    }
  // return minDiff;
};
