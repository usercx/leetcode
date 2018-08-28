/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
// 放置队列顺序遍历
var connect = function(root) {
  if(!root){
    return;
  }
  let quene = [root];
  while(quene.length !== 0){
    let _temp = [];
    quene.push(null);
    for(let i = 0; i < quene.length - 1; i++){
      quene[i].next = quene[i + 1];
      if(quene[i].left){
        _temp.push(quene[i].left);
      }
      if(quene[i].right){
        _temp.push(quene[i].right);
      }
    }
    quene = _temp;
  }
};