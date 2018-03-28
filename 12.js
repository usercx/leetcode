var intToRoman = function(num) {
  let four = ["", "M", "MM", "MMM"];
  let three = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let two = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let one = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let result = "", index = 0;
  while(num){
    let val = num % 10;
    switch(index){
      case 0: result = one[val] + result;break;
      case 1: result = two[val] + result;break;
      case 2: result = three[val] + result;break;
      case 3: result = four[val] + result;break;
    }
    num = parseInt(num / 10);
    index++;
  }
  return result;
};