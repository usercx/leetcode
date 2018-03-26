// 滑动窗口，即遇到下一个字符与当前子串有重复，记录最大值，然后去处重复部分，继续滑动

var lengthOfLongestSubstring = function(s) {
  // 最大值
  let max = 0;
  // 窗口起始索引
  let index = 0;
  for(let i = 0; i < s.length; i++){
    // 当前字符
    let current_char = s[i];
    // 当前字符上一个出现这个字符的位置（判断是否在窗口内部）
    let prev_index = s.lastIndexOf(current_char, i - 1);
    // 如果在窗口内部，重置窗口的起始位置即index
    // 如果当前位置是0（即i - 1 = -1），则index不用操作
    if(prev_index >= index && i - 1 >= 0){
      index = prev_index + 1;
    }
    let distance = i - index + 1;
    if(distance > max){
      max = distance;
    }
  }
  // 这里使用length做差所以不必+1
  if(s.length - index > max){
    max = s.length - index;
  }
  return max;
};

console.log(lengthOfLongestSubstring("c"));