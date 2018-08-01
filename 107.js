/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let arr = root !== null ? [root] : [];
  let result = [];
  while(arr.length !== 0){
    let temp = [];
    let _result = [];
    for(let i = 0; i < arr.length; i++){
      let node = arr[i];
      if(node === null){
        continue;
      }
      _result.push(node.val);
      if(node.left){
        temp.push(node.left);
      }
      if(node.right){
        temp.push(node.right);
      }
    }
    result.push(_result);
    arr = temp;
  }
  return result.reverse();
};