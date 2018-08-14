/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

 // 递归加剪枝，（check就是剪枝的过程，合法在继续进行，否则就...）
var solveSudoku = function(board) {
  // 获取下一个坐标点
  let getDot = function(){
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[i].length; j++){
        if(board[i][j] === '.'){
          return [i, j];
        }
      }
    }
    return [-1, -1];
  };
  // 针对指定的点，判断是否符合规则（即判断行列3*3是否符合规则）
  let check = function(i, j, val){
    if(board[i].includes(val)){
      return false;
    }
    if(board.map(arr => arr[j]).includes(val)){
      return false;
    }
    let m = parseInt(i / 3), n = parseInt(j / 3);
    for(let x = m * 3; x <= m * 3 + 2; x++){
      for(let y = n * 3; y <= n * 3 + 2; y++){
        if(board[x][y] === val){
          return false;
        }
      }
    }
    return true;
  };

  let loop = function(){
    let cor = getDot();
    let manzu = false;
    if(cor[0] === -1 && cor[1] === -1){
      return true;
    }
    for(let i = 1; i <= 9; i++){
      if(check(cor[0], cor[1], i + "")){
        board[cor[0]][cor[1]] = i + "";
        let flag = loop();
        if(flag === false){
          board[cor[0]][cor[1]] = ".";
        } else {
          manzu = true;
          break;
        }
      }
    }
    return manzu;
  };
  loop();
};

let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

solveSudoku(board);
console.log(board);