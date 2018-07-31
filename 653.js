/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var findTarget = function(root, k) {
  let flag = {};
  // 遍历树结构，找标记（不用递归了，用队列试试~）
  let quene = [root];
  while(quene.length > 0){
    let head = quene.shift();
    if(head == null){
      continue;
    }
    quene.push(head.left);
    quene.push(head.right);
    if(flag[k - head.val]){
      return true;
    }
    flag[head.val] = true;
  }
  return false;
};
