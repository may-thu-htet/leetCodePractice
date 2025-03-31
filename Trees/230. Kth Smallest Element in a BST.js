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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let stack = [];
  let cur = root;

  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    k--;
    if (k === 0) {
      return cur.val;
    }
    cur = cur.right;
  }

  //RECURSIVE
  //     function helper(root) {
  //         if (!root) return;
  //         helper(root.left, k);
  //         result.push(root.val);
  //         helper(root.right, k)
  //         return result;
  //     }
  //     helper(root);
  //    return result[k - 1];
};
