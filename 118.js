
/**
 * @param {number} numRows
 * @return {number[][]}
 */
function getIndex(arr, index){
  if(index < 0){
    return 0;
  }
  return arr[index];
}
var generate = function(numRows) {
  if(numRows <= 0){
    return [];
  }
  if(numRows === 1){
    return [[1]];
  }
  if(numRows === 2){
    return [[1], [1, 1]];
  }
  let last = generate(numRows - 1);
  let prev = last[last.length - 1];
  let result = [];
  for(let i = 0; i < prev.length; i++){
    result[i] = getIndex(prev, i - 1) + getIndex(prev, i);
  }
  result.push(1);
  last.push(result);
  return last;
};
console.log(generate(10));