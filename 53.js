/**
 * 这道题是动态规划的题目
 * 设dp[j][i]表示从j到i的最大值，则方程如下：
 * 
 * dp[j][i] = 1: s[j];   i === j
 *            2: max(s[j], s[j] + dp[j + 1][i])
 * @param s 
 */

// var maxSubArray = function(nums) {
//   debugger;
//   if(!nums || nums.length === 0){
//     return 0;
//   }
//   let i = 0, j = 0, max = Number.MIN_SAFE_INTEGER, dp = [];
//   for(; i < nums.length; i++){
//     if(!dp[i]){
//       dp[i] = [];
//     }
//     for(j = i; j >= 0; j--){
//       if(i === j){
//         dp[i][j] = nums[j];
//       } else {
//         dp[i][j] = Math.max(nums[j], nums[j] + dp[i][j + 1]);
//       }
//       if(dp[i][j] > max){
//         max = dp[i][j];
//       }
//     }
//   }
//   return max;
// };

// 似乎这道题不是那么纯粹的动态规划。。。
// 仔细想一想，其实他也算是动态规划。。。搞不懂搞不懂。。。蛋疼。。。
// 针对第n个数的前的最大值为如下所示：
// sum[0] = nums[0]
// sum[n] = max(nums[n], sum[n - 1] + nums[n])
// 所以其实求给定nums的最大子数组的累加和即如上表达式所示。。。
// 所以这他娘的算不算动态规划？

var maxSubArray = function(nums){
  if(!nums || nums.length === 0) {
    return 0;
  }

  let max = Number.MIN_SAFE_INTEGER, start = 0, end = 0, sum = [];
  for(let i = 0; i < nums.length; i++){
    if(i === 0){
      sum[0] = nums[0];
    } else {
      sum[i] = Math.max(nums[i], sum[i - 1] + num[i]);
    }
    if(sum[i] > max){
      max = sum[i];
    }
  }
  return max;
};
