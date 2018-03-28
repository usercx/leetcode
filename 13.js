
var romanToInt = function(s) {
  s = s.toUpperCase();
  let tran = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  let sum = 0;
  for(let i = 0; i < s.length; i++){
    let ch = s[i];
    if(i === s.length - 1){
      sum = sum + tran[ch];
    } else {
      if(tran[ch] < tran[s[i + 1]]){
        sum = sum - tran[ch];
      } else {
        sum = sum + tran[ch];
      }
    }
  }
  return sum;
};

console.log(romanToInt("MMMXIX"));