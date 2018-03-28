/**
 * 这道题有点难理解。。。
 * 其实就是数数，比如1就是"1个1"，把数字提出来就是"11"
 * 11就是"2个1"， 就是"21"
 * 21就是"1个21个1"就是"1211"
 * 
 * 
 * 然后！！！
 * 他是从1开始转化的
 * 1次转化就是1
 * 2次转化就是11
 * 3次转化就是21
 * 输入的n代表第n次转化
 * @param {} n 
 */
var countAndSay = function(n) {
  if(n === 1){
    return "1";
  }
  let tran = function(n){
    n = n.toString();
    let sumstr = "", ch = n[0];
    let num = 0, sum = 0;
    for(let i = 0; i < n.length; i++){
      // 如果相等就继续统计
      if(ch === n[i]){
        sum++;
      } else {
        sumstr = sumstr + sum + ch;
        sum = 1;
        ch = n[i];
      }
    }
    sumstr = sumstr + sum + ch;
    return sumstr;
  };
  let sum = 1;
  for(let i = 2; i <= n; i++){
    sum = tran(sum);
  }
  return sum;
};