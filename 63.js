
/**
 * 他喵的这道题a的不容易啊55555555555555555555555555555555
 * 各种各样的情况……
 * 判断好吧，还不能用递归，操蛋- -
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let a = [];
  let arr = [];
  // let arr = obstacleGrid.map(obj => obj.slice(0, obj.length));
  // 转化为行数小于列数的数组
  if(m > n){
    arr.length = n;
    arr = arr.map(() => []);
    for(let i = 0; i < n; i++){
      arr[i] = obstacleGrid.map(obj => obj[i]);
    }
  }
  for(let i = 0; i < m; i++){
    if(!a[i]){
      a[i] = [];
    }
    for(let j = 0; j < n; j++){
      if(i === 0 && j === 0){
        a[i][j] = 1 - obstacleGrid[i][j];
      } else if(i === 0 && j !== 0){
        a[i][j] = obstacleGrid[i][j] === 0 ? a[i][j - 1] : 0;
      } else if(i !== 0 && j === 0){
        // 对称
        a[i][j] = obstacleGrid[i][j] === 0 ? a[i - 1][j] : 0;
      } else {
        a[i][j] = obstacleGrid[i][j] === 0 ? (a[i - 1][j] + a[i][j - 1]) : 0;
      }
    }
  }
  return a[m - 1][n - 1];
};
// let arr = [[0,0],[1,0]];
// console.log(uniquePathsWithObstacles(arr));