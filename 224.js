/**
 * @param {string} s
 * @return {number}
 */

// 获取给定数组的最后一个元素，如果数组位空，就返回undefined
function getArrLast(arr){
  if(arr.length === 0){
    return undefined;
  }
  return arr[arr.length - 1]
}
// 没有乘除法，括号有卵用...没有乘除法这道题简单多了...
var calculate = function(s) {
  s = s.trim().split("");
  let symbols = [];
  // 变换括号前后的符号
  // 由于括号的原因，要把符号全变过来（比如2-(5-3)就变成2-5+3）
  let flag = [];
  for(let i = 0; i < s.length; i++){
    let c = s[i];
    if(!['(', ')', '+', '-'].includes(c)){
      continue;
    }
    if(c === '('){
      flag.push(getArrLast(symbols) === '-' ? true : false);
    } else if(c === ')'){
      flag.pop();
    } else{
      if(getArrLast(flag) === true){
        symbols.push(c === '-' ? '+' : '-')
      } else {
        symbols.push(c);
      }
      // symbols.push((getArrLast(flag) === true && c === '+') ? '-' : '+');
    }
  }
  // 过滤括号
  s = s.filter(c => !['(', ')'].includes(c)).join("");
  // 获取数字
  let numArr = s.split(/\+|\-/).map(num => parseInt(num));
  let sum = numArr[0];
  for(let i = 0; i < symbols.length; i++){
    if(symbols[i] === '+'){
      sum = sum + numArr[i + 1];
    } else {
      sum = sum - numArr[i + 1];
    }
  }
  return sum;
};
console.log(calculate(" 2-1 + 2 "));