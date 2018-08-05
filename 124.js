/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let max = Number.MIN_SAFE_INTEGER;
  let cal = function(node){
    if(node === null){
      return 0;
    }
    let left = Number.MIN_SAFE_INTEGER, right = Number.MIN_SAFE_INTEGER, sum = node.val;
    if(node.left){
      left = cal(node.left);
      sum = sum + left;
    }
    if(node.right){
      right = cal(node.right);
      sum = sum + right;
    }
    // 单左节点，单右节点，左中右之和，左中，右中，中，最大值
    max = Math.max(left, right, sum, left + node.val, right + node.val, node.val, max);
    // 返回只能是左中，右中，左右中，中
    return Math.max(node.val, left + node.val, right + node.val);
  };
  cal(root);
  return max;
};