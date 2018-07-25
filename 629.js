/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 递推，当有n+1个数的时候，先把前n个数拿出来当做1个整体，将n+1放在最后的时候，针对n+1来说没有数满足i<j但是a[i]>a[j]
// 当n+1放在倒数第二位，有一个（最后一位）满足i<j...   
// 依次类推将n+1放在第一位的时候，有n位满足...
// 所以将所有情况的结果累加起来，最后一位是f(n, k)，放在倒数第二位是f(n, k -1) ...
// 公式为f(n + 1) = f(n, k) + f(n, k - 1) + f(n, k - 2) + ... + f(n, k - n - 1);
var kInversePairs = function(n, k) {
  let a = [];
  if(k === 0){
    return 1;
  }
  let sum = function(a, start, end){
    let s = 0;
    if(start > end){
      let temp = start;
      start = end;
      end = temp;
    }
    for(let i = start; i <= end; i++){
      if(i < 0){
        continue;
      }
      s = s + a[i];
      s = s % (Math.pow(10, 9) + 7);
    }
    return s;
  };
  for(let i = 0; i < n; i++){
    if(!a[i]){
      a[i] = [];
    }
    for(let j = 0; j <= k; j++){
      if(i === 0){
        a[i][j] = j === 0 ? 1 : 0;
      } else if(j === 0){
        a[i][j] = 1;
      } else {
        a[i][j] = sum(a[i - 1], j - i, j);
      }
    } 
  }
  return a[n - 1][k];
};

console.log(kInversePairs(4, 4));