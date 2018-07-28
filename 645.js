/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let flag = {};
  let duplicate, miss;
  for(let i = 1; i <= nums.length; i++){
    let index = nums[i - 1];
    if(flag[index]){
      duplicate = index;
    }
    flag[index] = true;
  }
  for(let i = 1; i <= nums.length; i++){
    if(!flag[i]){
      return [duplicate, i];
    }
  }
};