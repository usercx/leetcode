// 全是坑。。。
// 不允许申请新的空间不是不允许定义变量。。。
var isPalindrome = function(x) {
  if(x < 0){
    return false;
  }
  let s = x;
  if(x >= 0 && x <= 9){
    return true;
  }
  let temp = 0;
  while(x){
    let val = x % 10;
    x = parseInt(x / 10);
    temp = temp * 10 + val;
  }
  if(temp === s) {
    return true;
  }
  return false;
};