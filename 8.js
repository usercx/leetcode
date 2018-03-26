/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // 判断字符是否是数字
  let isNum = function(num){
    return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].some((val) => (val === num));
  };
  // 是否已经遇到了数字？是否遇到了+ -号
  let numFlag = false, absFlag = false, abs = 1, num = 1;
  let max = 2147483647;
  let min = -2147483648;

  for(let i = 0; i < num.length; i++){
    let val = num[i];
    // 如果是符号的话，即+-号
    if(val === "+" || val === "-"){
      // 在这之前已经遇到了符号但是没遇到数字，此时数字不合法，即反回0
      if(absFlag && !numFlag){
        return 0;
      }
      // 在这之前没遇到符号但是也没遇到数字,此时置absFlag为true并设置abs位
      if(!absFlag && !numFlag){
        absFlag = true;
        abs = val === "+" ? 1 : -1;
      }
      // 在这之前遇到数字，不管有没有遇到符号，此时的数字已经截至，即可返回当前数字
      if(absFlag && numFlag){
        return num * abs;
      }
    }

    // 如果是数字的话
    if(isNum(val)){
      
    }
  }
};