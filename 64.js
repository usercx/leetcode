/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var result = [];
  for(var i = 0; i < grid.length; i++) {
      result[i] = [];
      var l = grid[i];
      for (var j = 0; j < l.length; j++) {
          // 第一行只能由左往右走，所以最小的就是左边+上自己
          if(i === 0) {
              result[i][j] = j === 0 ? grid[i][j] : (result[i][j - 1] + grid[i][j]);
              continue;
          }
          if(j === 0) {
              result[i][j] = result[i - 1][j] + grid[i][j];
              continue;
          }
          var r1 = result[i - 1][j] + grid[i][j];
          var r2 = result[i][j - 1] + grid[i][j];
          result[i][j] = r1 > r2 ? r2 : r1;
      }
  }
  var r = result[grid.length - 1];
  return r[r.length - 1];
};