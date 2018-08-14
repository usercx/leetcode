/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 就是看先序遍历的结果是否为一个有序的数组
var isValidBST = function(root) {
  let last = Number.MIN_SAFE_INTEGER;
  if(root === null){
    return true;
  }
  let pre = function(node){
    if(node.left){
      if(!pre(node.left)){
        return false;
      }
    }
    if(last >= node.val){
      return false;
    }
    last = node.val;
    if(node.right){
      if(!pre(node.right)){
        return false;
      }
    }
    return true;
  };
  return pre(root);
};