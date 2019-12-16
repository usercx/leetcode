/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  var list = []; // 保存的是上一层到达每个点最短的数据
  var min = -1;
  for(var i = 0; i < triangle.length; i++) {
      var sub = triangle[i];
      if(i === 0) {
          min = sub[i];
          list[i] = sub[i];
          continue;
      }
      var last; // 保存上一个元素，第0个的话肯定last最大（这个值无效）
      for(var j = 0; j < sub.length; j++) {
          // 第0项只加一个
          if(j === 0) {
              last = list[j];
              list[j] += sub[j];
              min = list[j];
              continue;
          }
          if (j === sub.length - 1) {
              list[j] = last + sub[j]; // 不用在记录last了
              min = min > list[j] ? list[j] : min; // 比较min
              continue;
          }
          var current = list[j];
          var r1 = last + sub[j];
          var r2 = current + sub[j];
          list[j] = r1 > r2 ? r2 : r1;
          last = current;
          min = min > list[j] ? list[j] : min; // 比较min
      }
  }
  return min;
};