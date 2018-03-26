/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 直接使用js的方法进行合并取中位数
// var findMedianSortedArrays = function(nums1, nums2) {
//   let nums = nums1.concat(nums2).sort((a, b) => {
//     return a - b;
//   });
//   let length = nums.length;
//   let val = 0;
//   if(length % 2 === 0){
//     let index = length / 2;
//     val = (nums[index] + nums[index - 1]) / 2;
//   } else {
//     let index = (length - 1) / 2;
//     val = nums[index];
//   }
//   return val;
// };

/**
 * 正经方法我觉得应该是依次遍历然后取中位数
 * 审错题目...以为是O(m + n)
 * 结果是O(log( m + n ))
 */
// var findMedianSortedArrays = function(nums1, nums2){
//   let length1 = nums1.length, length2 = nums2.length, length = length1 + length2, sum = 0;
//   let index1 = 0, index2 = 0, index = 0;
//   while(true){
//     let val = 0;
//     // 数组1已经取完了剩下的全是数组2
//     if(index1 >= length1){
//       val = nums2[index2];
//       index2++;
//     } else if(index2 >= length2){
//       val = nums1[index1];
//       index1++;
//     } else if(nums1[index1] > nums2[index2]){
//       val = nums2[index2];
//       index2++;
//     } else {
//       val = nums1[index1];
//       index1++;
//     }
//     // 偶数个
//     if(length % 2 === 0){
//       if(index === (length / 2) - 1){
//         sum = val;
//       }
//       if(index === (length / 2)){
//         return (sum + val) / 2;
//       }
//     }
//     // 奇数个
//     if(length % 2 === 1){
//       if(index === (length - 1) / 2){
//         return val;
//       }
//     }

//     index++;
//   }
// };

var findMedianSortedArrays = function(){

};

console.log(findMedianSortedArrays([1, 2], [3, 4]));