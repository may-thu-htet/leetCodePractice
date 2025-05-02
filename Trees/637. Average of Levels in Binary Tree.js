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
var averageOfLevels = function (root) {
  // BFS
  // queue data structure
  // iterate through the length of the queue to find sum and then find the average
  let res = [];
  let q = [root];

  while (q.length) {
    let nodesNo = q.length;
    let curSum = 0;
    for (let i = 0; i < nodesNo; i++) {
      let cur = q.shift();
      curSum += cur.val;
      if (cur.left) q.push(cur.left);
      if (cur.right) q.push(cur.right);
    }
    let avg = curSum / nodesNo;
    res.push(avg);
  }
  return res;
};
