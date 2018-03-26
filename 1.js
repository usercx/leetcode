/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var flag = {};
  for(var i = 0; i < nums.length; i++){
    var val = nums[i];
    if(flag[val] !== undefined){
      return [flag[val], i];
    }
    flag[target - val] = i;
  }
};