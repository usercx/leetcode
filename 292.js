/**
 * 当为1 2 3的时候都是win
 * 所以为4的时候无论怎么拿都会转化为剩1 2 3个，所以对手肯定会赢
 * 为5的时候只要拿到不剩4就是稳赢的局，同理6 and 7，所以以下推下去8还是会对手赢，所以初始个数的时候为4的倍数永远是对手获胜
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  if(n % 4 === 0){
    return false;
  }
  return true;
};