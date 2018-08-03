/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  if(n <= 0){
    return ;
  }
  if(n === 1){
    return "1";
  }
  let flag = [], jiecheng = [1], result = "";
  let init = function(){
    for(let i = 1; i <= n; i++){
      jiecheng[i] = i * jiecheng[i - 1];
    }
  };
  init();
  // 获取剩下没有使用的数组
  let getArr = function(){
    let arr = [-1];
    for(let i = 1; i <= n; i++){
      if(!flag[i]){
        arr.push(i);
      }
    }
    return arr;
  };
  let num = n;
  while(k){
    num--;
    let sortArr = getArr();
    let temp = jiecheng[num];
    let r = parseInt(k / temp);
    let addResult = k % temp === 0 ? sortArr[r] : sortArr[r + 1];
    result = result + addResult;
    flag[addResult] = true;
    k = k % temp;
  }
  return result + getArr().filter(o => o > 0).reverse().join("");
};

console.log(getPermutation(4, 3));