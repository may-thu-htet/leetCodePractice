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
var postorderTraversal = function (root) {
  let res = [];
  // Recursive approach
  // function postOrder(root){
  //     if(!root)return;
  //     postOrder(root.left);
  //     postOrder(root.right);
  //     res.push(root.val);
  // }
  // postOrder(root);
  // return res;

  // iterative appraoch
  let stack = [root];
  let visited = [false];
  while (stack.length > 0) {
    const cur = stack.pop();
    const v = visited.pop();
    if (cur) {
      if (v) {
        res.push(cur.val);
      } else {
        stack.push(cur);
        visited.push(true);
        stack.push(cur.right);
        visited.push(false);
        stack.push(cur.left);
        visited.push(false);
      }
    }
  }
  return res;
};
