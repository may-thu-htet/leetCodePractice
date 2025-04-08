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
var maxDepth = function (root) {
  // Recursive approach
  // if(!root)return 0;
  // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  // BFS
  // *** Note: LeetCode provide additional class Queue, but in actual JS data type Queue does not exist.//
  /* let level = 0;
    let q = new Queue();

    if(root){
        q.push(root);
    }

    while (q.size() > 0) {
        let size = q.size();
        for (let i = 0; i < size; i++ ) {
           let node = q.pop();
            if (node.left !== null) q.push(node.left);
            if (node.right !== null) q.push(node.right);
        }
            level++;
    }
    return level;
    */

  // Iterative DFS
  let stack = [[root, 1]];
  let res = 0;

  while (stack.length > 0) {
    let cur = stack.pop();
    let node = cur[0];
    let depth = cur[1];
    if (node !== null) {
      res = Math.max(res, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }
  return res;
};
