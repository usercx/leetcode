/**
 * @param {number[]} bits
 * @return {boolean}
 */
// 就是看最后一位之前有多少个1（0个1就代表倒数第二位是0），奇数个的1则代表最后一个0要和倒数第二个配成10，偶数个的就自己配自己了，在遇到的0无论是自己还是和前面配都行了就
var isOneBitCharacter = function(bits) {
  let len = bits.length;
  // if(bits[len - 1] === 0){
  //   return true;
  // }
  let num = 0;
  for(let i = len - 2; i >= 0 && bits[i] !== 0; i--){
    num = num + 1;
  }
  return num % 2 === 0;
};