// 我觉的重点在于一个循环解决这个问题。。。恩，一个循环
// 所以他的难度才是中等。。。

// 突然觉得链表的知识忘了好多- -

var removeNthFromEnd = function(head, n) {
  let p1 = head, p2 = head;
  let index = 0;
  while(n--){
    if(!p1){
      return null;
    }
    p1 = p1.next;
    // 如果p1是null的话代表移除的元素是倒数第n个元素即第一个元素
    if(p1 === null){
      return head.next;
    }
  }
  while(true){
    if(p1.next === null){
      p2.next = p2.next ? p2.next.next : null;
      break;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return head;
};

let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

// head = {
//   val: 1,
//   next: null
// };
console.log(removeNthFromEnd(head, 2));