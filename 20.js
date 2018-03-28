// 第一眼的操作绝壁是押入栈啊，稳妥的
var isValid = function(s) {
  let stack = [];
  for(let i = 0; i < s.length; i++){
    let ch = s[i];
    if(ch === "("){
      stack.push(ch);
    } else if(ch === "["){
      stack.push(ch);
    } else if(ch === "{"){
      stack.push(ch);
    } else if(ch === "}"){
      if(stack.pop() !== '{'){
        return false;
      }
    } else if(ch === "]"){
      if(stack.pop() !== '['){
        return false;
      }
    } else if(ch === ")"){
      if(stack.pop() !== '('){
        return false;
      }
    }
  }
  if(stack.length !== 0){
    return false;
  }
  return true;
};