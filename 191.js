/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 投机取巧了... 直接转化为2进制求里面有多少个1
// 不过这道题简单的思路就是这么做，复杂点的应该是n&n-1的思路把
var hammingWeight = function(n) {
  return n.toString(2).split("").filter(a => a === '1').length;
};