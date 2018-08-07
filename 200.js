/**
 * @param {character[][]} grid
 * @return {number}
 */
// 深搜
var numIslands = function(grid) {
  // if(grid.length === 0){
  //   return 
  // }
  let flag = [];
  let maxi = grid.length;
  let maxj = (grid[0] || []).length;
  let nums = 0;
  // 初始化标记数组
  for(let i = 0; i < grid.length; i++){
    if(!flag[i]){
      flag[i] = [];
    }
    for(let j = 0 ; j < grid[i].length; j++){
      // 如果是海洋的话就代表遍历过了
      flag[i][j] = grid[i][j] === '0';
    }
  }
  // 获取未被访问的点的坐标，如果全部都被访问，就返回-1
  let getCor = function(){
    for(let i = 0 ; i < flag.length; i++){
      for(let j = 0; j < flag[i].length; j++){
        if(!flag[i][j]){
          return [i, j]
        }
      }
    }
    return [-1, -1];
  };

  let bfs = function(i, j){
    if(i >=maxi || j >= maxj || i < 0 || j < 0 || flag[i][j]){
      return;
    }
    flag[i][j] = true;
    bfs(i - 1, j); 
    bfs(i + 1, j); 
    bfs(i, j + 1); 
    bfs(i, j - 1); 
  };
  while(true){
    let cor = getCor();
    if(cor[0] === -1){
      break;
    }
    bfs(cor[0], cor[1]);
    nums++;
  }
  return nums;
};
numIslands([]);
console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));