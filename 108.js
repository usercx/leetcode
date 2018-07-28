/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(nums.length === 0){
    return null;
  }
  let middle = parseInt(nums.length / 2);
  let head = new TreeNode(nums[middle]);
  head.left = sortedArrayToBST(nums.slice(0, middle));
  head.right = sortedArrayToBST(nums.slice(middle + 1, nums.length));
  return head;
};
// 二叉树中序遍历的结果还原二叉树，就是个递归的过程，