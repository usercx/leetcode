/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var result = 0;
  var max = 2147483647, min = -2147483648;
  while(x){
    var val = x % 10;
    result = result * 10 + val; 
    if(result > 2147483648 || result < min){
      return 0;
    }
    x = parseInt(x / 10);
  }
  return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(0));