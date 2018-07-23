/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let words = str.split(" ");
  if(words.length !== pattern.length){
    return false;
  }
  let exsit = {};
  let exsit2 = {};
  for(let i = 0; i < pattern.length; i++){
    let key = pattern[i];
    if(exsit[key] === undefined){
      exsit[key] = words[i];
    }
    if(exsit2[words[i]] === undefined){
      exsit2[words[i]] = key;
    }
    if(exsit[key] !== words[i] || exsit2[words[i]] !== key){
      return false;
    }
  }
  return true;
};