/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// 动态规划 注意边界条件判断
// a[i][j] = t[i] === s[j] ? (a[i][j - 1] + a[i - 1][j - 1]) : a[i][j - 1];
var numDistinct = function(s, t) {
  if(t === ""){
    return 1;
  }
  if(s === ""){
    return 0;
  }
  let a = [];
  for(let i = 1; i <= t.length; i++){
    for(let j = 1; j <= s.length; j++){
      // 如果还没访问到就创建下
      if(!a[i]){
        a[i] = [];
      }
      // 如果不相等就是等于之前一个，
      if(s.charAt(j - 1) !== t.charAt(i - 1)){
        // 如果是首个的话，不相等应该为0
        a[i][j] = j === 1 ? 0 : a[i][j - 1];
      } else {
        // 否则就是等于上一个加之前一个
        if(i === 1 && j === 1){
          a[i][j] = 1;
        } else if(i !== 1 && j === 1){
          a[i][j] = 0;
        } else if(i !== 1 && j !== 1){
          a[i][j] = a[i][j - 1] + a[i - 1][j - 1];
        } else{
          a[i][j] = a[i][j - 1] + 1;
        }
      }
    }
  }
  return a[t.length][s.length];
};

console.log(numDistinct("rabbbit", "rabbit"));