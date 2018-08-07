/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// 递归处理就行了  递归会超时
// var isInterleave = function(s1, s2, s3) {
//   if(s3 === ""){
//     return s1 === "" && s2 === "";
//   }
//   if(s1 === ""){
//     return s2 === s3;
//   }
//   if(s2 === ""){
//     return s1 === s3;
//   }
//   let c3 = s3.charAt(0);
//   let c1 = s1.charAt(0);
//   let c2 = s2.charAt(0);
//   if(c1 === c3 && c2 === c3){
//     return isInterleave(s1.substring(1, s1.length), s2, s3.substring(1, s3.length)) || isInterleave(s1, s2.substring(1, s2.length), s3.substring(1, s3.length));
//   } else if(c1 === c3){
//     return isInterleave(s1.substring(1, s1.length), s2, s3.substring(1, s3.length));
//   } else if (c2 === c3){
//     return isInterleave(s1, s2.substring(1, s2.length), s3.substring(1, s3.length));
//   }
//   return false;
// };

// 绝壁...
// 我是想不到dp。。。
// 第一反应肯定是递归...
// 就这样吧，这个题是参照了网上的答案...
// 好难受，上面是递归的方法，会超时
var isInterleave = function(s1, s2, s3){
  if(s1.length + s2.length !== s3.length){
    return false;
  }
  if(s1 === ""){
    return s2 === s3;
  }
  if(s2 === ""){
    return s1 === s3;
  }
  if(s1.length < s2.length){
    let temp = s1;
    s1 = s2;
    s2 = temp;
  }
  let dp = [[true]];
  for(let i = 1; i <= s2.length; i++){
    dp[0][i] = dp[0][i - 1] && (s2.charAt(i - 1) === s3.charAt(i - 1));
  }
  for(let i = 1; i <= s1.length; i++){
    if(!dp[i]){
      dp[i] = [];
    }
    dp[i][0] = dp[i - 1][0] && (s1.charAt(i - 1) === s3.charAt(i - 1));
    for(let j = 1; j <= s2.length; j++){
      dp[i][j] = (dp[i][j - 1] && (s2.charAt(j - 1) === s3.charAt(i + j - 1))) || (dp[i - 1][j] && (s1.charAt(i - 1) === s3.charAt(i + j - 1)));
    }
  }
  console.log(dp);
  return dp[s1.length][s2.length];
};
console.log(isInterleave("aabaac", "aadaaeaaf", "aadaaeaabaafaac"));