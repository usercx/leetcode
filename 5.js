/**
 * 这道题是动态规划的题目
 * 设dp[j][i]表示从j到i是否是回文串，则方程如下：
 * 
 * dp[j][i] = 1: str[j] === str[i]; (i - j < 2);
 *            2: str[j] === str[i] && dp[j+1][i-1];
 * @param s 
 */

var longestPalindrome = function(s) {
  if(!s){
    return "";
  }
  let i = 0, j = 0, start = 0, end = 0, dp = [];
  for(; i < s.length; i++){
    if(!dp[i]){
      dp[i] = [];
    }
    for(j = 0; j <= i; j++){
      if(i - j < 2){
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = s[i] === s[j] && dp[i - 1][j + 1];
      }
      if(dp[i][j] && end - start < i - j){
        start = j;
        end = i;
      }
    }
  }
  return s.substring(start, end + 1);
};