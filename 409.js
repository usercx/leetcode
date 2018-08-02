/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  s = s.split("");
  let result = {};
  s.forEach(c => {
    result[c] = result[c] === undefined ? 1 : (result[c] + 1);
  });
  let flag = false, sum = 0;
  Object.keys(result).forEach(key => {
    let val = result[key];
    if(val % 2 === 0){
      sum = sum + val;
    } else {
      sum = sum + val - 1;
      flag = true;
    }
  });
  return flag ? (sum + 1) : sum;
};