// 不知道这道题有没有看起来那么简单...

var letterCombinations = function(digits) {
  if(!digits){
    return [];
  }
  let obj = {
    '1': [''],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': [''],
  };

  let result = [""];
  for(let i = 0; i < digits.length; i++){
    let num = obj[digits[i]];
    result = result.reduce(function(res, val){
      return res.concat(num.map(o => val + o));
    }, []);
  }
  return result;
};

console.log(letterCombinations("23"));