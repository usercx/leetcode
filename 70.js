/**
 *  * @param {number} n
 *   * @return {number}
 *    */
var list = [];
var climbStairs = function(n) {
    if(n === 1) {
        return 1;
    }
    if(n === 2) {
        return 2;
    }
    if (!list[n - 1]) {
        list[n - 1] = climbStairs(n - 1);
    }
    if (!list[n - 2]) {
        list[n - 2] = climbStairs(n - 2);
    }
    return list[n - 1] + list[n - 2];
};

