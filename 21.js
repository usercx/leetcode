/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  debugger;
  let head = null, temp = null;
  while(l1 && l2){
    let node = null;
    if(l1.val < l2.val){
      node = l1;
      l1 = l1.next;
    } else {
      node = l2;
      l2 = l2.next;
    }
    if(!temp){
      head = node;
      temp = node;
    } else {
      temp.next = node;
      temp = node;
    }
  }
  if(l1){
    if(temp){
      temp.next = l1;
    } else {
      head = l1;
    }
  }
  if(l2){
    if(temp){
      temp.next = l2;
    } else {
      head = l2;
    }
  }
  return head;
};

let o1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
};
let o2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
};

console.log(mergeTwoLists(o1, o2));