/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// p[m][n] = p[m - 1][n] + p[m][n - 1];
var uniquePaths = function(m, n) {
  if(m === 1 || n === 1){
    return 1;
  }
  if(m === 2){
    return n;
  }
  if(n === 2){
    return m;
  }

  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};