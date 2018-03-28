// 盛水，求得是矩形面积不是梯形面积

// 头尾双指针指向，计算面积，若左侧大则左侧++若右侧大则右侧--
// 因为以短的为基础， 长的向中间收敛始终不会大于最大面积（短 * 索引差）短的最大值就是当前值而索引差是越来越小的所以...
var maxArea = function(height) {
  let max = -1;
  let left = 0, right = height.length - 1;
  while(left < right){
    let area = Math.min(height[left], height[right]) * (right - left);
    if(area > max){
      max = area;
    }
    if(height[left] < height[right]){
      left++;
    } else {
      right--;
    }
  }
  return max;
};

console.log(maxArea([1, 2]));