/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  let head = root;

  while (head) {
    let dummy = new _Node(0);
    let cur = dummy;
    while (head) {
      if (head.left) {
        cur.next = head.left;
        cur = cur.next;
      }
      if (head.right) {
        cur.next = head.right;
        cur = cur.next;
      }
      head = head.next;
    }
    head = dummy.next;
  }

  return root;
};
