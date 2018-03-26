// 这道题犯得最二的地方就是没看人家的数据结构类型。。。害得我。。。喵的竟然这么久才做出来...

var addTwoNumbers = function(l1, l2) {
  let flag = 0;
  let head = null, temp = null;
  while(l1 || l2){
    // 计算求和并移动节点
    let sum = flag;
    if(l1){
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if(l2){
      sum = sum + l2.val;
      l2 = l2.next;
    }
    // 储存结果
    let obj = new ListNode(sum % 10);
    if(head === null){
      head = obj;
      temp = obj;
    } else {
      temp.next = obj;
      temp = obj;
    }
    // obj.next = head;
    // head = obj;
    // 重置进位
    flag = 0;
    if(sum >= 10){
      flag = 1;
    }
  }
  if(flag === 1){
    let obj = new ListNode(1);
    temp.next = obj;
    temp = obj;
  }
  return head;
};