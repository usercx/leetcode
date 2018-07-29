/**
 * @param {number} n
 * @return {number}
 */

// 计算C5 4（排列组合的计算）
// 这里不用考虑溢出的情况
let cal = function(m, n){
  let p = 1, q = 1;
  while(n !== 0){
    p = m * p;
    q = n * q;
    m--;
    n--;
  }  
  return p / q;
};
let nums = [];
// 初始化，nums数组中下标1代表9以内的所有数字中1的个数，下标2代表99以内的所有数字中的1的个数，下标3代表999以内的...
// 最多获取到10位，即9999999999（不一定能用到这么多，其他语言应该会溢出）
// 以5位举例，则1的个数应该是C(5, 1)*pow(9, 4)*1    +    C(5, 2)*pow(9, 3)*2   +   C(5, 3)*pow(9, 2)*3   +   C(5, 4)*pow(9, 1)*4   +   C(5, 5)*pow(9, 0)*1
let getNums = function(){
  nums[0] = 0;
  for(let i = 1; i <= 10; i++){
    let sum = 0;
    for(j = 1; j <= i; j++){
      sum = sum + cal(i, j) * Math.pow(9, i - j) * j;
    }
    nums[i] = sum;
  }
};
// 以240117举例
// 第一个2对应两个99999，一个是99999，另一个是199999（注意，这里并未统计199999中首位1的次数（应该是10w次））
// 同样的第二个4对应4个9999，分别是9999，19999，29999，39999（同上，未统计19999中的1）
// 以此类推可求出累加的1的个数，但是并未统计其中如果碰到累计的过程中的1的个数
// 2对应的199999中的1对应的个数是10w（是0则位0，是2以上的就是对应位数的10次方）
// 如果是1的话就是后边的数字+1
// 比如上边的数字第一位的2就是Math.pow(10, 5)
// 第四位的1就是19，第五位的1就是8，把上边统计出来的这些值全部相加即可得出结果
var countDigitOne = function(n) {
  if(n <= 0){
    return 0;
  }
  getNums();
  let a = (n + "").split("").map(o => parseInt(o));
  let sum = 0;
  let _sum = 0;
  for(let i = 0; i < a.length; i++){
    sum = sum + a[i] * nums[a.length - i - 1];
    let base = Math.pow(10, a.length - i - 1);
    if(a[i] === 0){
      _sum = _sum;
    } else if(a[i] > 1){
      _sum = _sum + base;
    } else {
      _sum = _sum + (n % base) + 1;
    }
  }
  return sum + _sum ;
};

console.log(countDigitOne(16));