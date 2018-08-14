/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
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
  for(let i = 0 ; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if(board[i][j] !== '.'){
        let val = board[i][j];
        board[i][j] = '.';
        if(!check(i, j, val)){
          return false;
        }
        board[i][j] = val;
      }
    }
  }
  return true;
};