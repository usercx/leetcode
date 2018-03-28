var longestCommonPrefix = function(strs) {
  if(!strs || strs.length === 0){
    return "";
  }
  let common = strs[0];
  for(let i = 0; i < strs.length; i++){
    let s = strs[i];
    while(common && !s.startsWith(common)){
      common = common.substring(0, common.length - 1);
    }
    if(common === ""){
      return "";
    }
  }
  return common;
};