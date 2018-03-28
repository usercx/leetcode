var searchInsert = function(nums, target) {
  for(var i = 0; i < nums.length; i++){
    if(nums[i] >= target){
      break;
    }
  }
  return i;
};