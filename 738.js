/**
 * @param {number} N
 * @return {number}
 */
/**
 * 转化为字符串，只要后一位比前一位小，前一位减一并将后边的所有都置为9
 */
var monotoneIncreasingDigits = function(N) {
  debugger;
  let arr = (N + "").split("").map(c => parseInt(c)).reverse();
  arr.push(0);
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] >= arr[i + 1]){
      continue;
    }
    for(let j = 0; j <= i; j++){
      arr[j] = 9;
    }
    arr[i + 1] = arr[i + 1] - 1;
  }
  arr.pop();
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
      sum = sum + Math.pow(10, i) * arr[i];
    }
  }
  return sum;
};
console.log(monotoneIncreasingDigits(1234));
console.log(monotoneIncreasingDigits(10));
console.log(monotoneIncreasingDigits(332));
console.log(monotoneIncreasingDigits(99999999));