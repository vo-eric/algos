/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

/**
 * Time Complexity: O(n), where n is the maximum number of nodes
 * Space Complexity: O(h), where h is the longest row * 2
 */

class Solution {
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p, q) {
    const pQueue = [p];
    const qQueue = [q];

    while (pQueue.length && qQueue.length) {
      const length = pQueue.length;

      for (let i = 0; i < length; i++) {
        const pNode = pQueue.shift();
        const qNode = qQueue.shift();

        if (pNode === null && qNode === null) {
          continue;
        }

        if (!pNode || !qNode || pNode.val !== qNode.val) {
          return false;
        }

        pQueue.push(pNode.left);
        pQueue.push(pNode.right);
        qQueue.push(qNode.left);
        qQueue.push(qNode.right);
      }
    }

    return true;
  }
}
