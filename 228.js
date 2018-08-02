/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length === 1){
    return [nums[0] + ""];
  }
  let result = [];
  let flag = false;
  let start = nums[0];
  for(let i = 1; i < nums.length; i++){
    // 最后一个元素的时候
    if(i === nums.length - 1){
      if(nums[i - 1] + 1 === nums[i]){
        result.push(start + "->" + nums[i]);
      } else {
        result.push(nums[i - 1] === start ? (start + "") : (start + "->" + nums[i - 1]));
        result.push(nums[i] + "");
      }
      continue;
    }
    // 连续的话不做处理
    if(nums[i - 1] + 1 === nums[i]){
      continue;
    }
    result.push(nums[i - 1] === start ? (start + "") : (start + "->" + nums[i - 1]));
    start = nums[i];
  }
  return result;
};
console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));
console.log(summaryRanges([0, 1]));