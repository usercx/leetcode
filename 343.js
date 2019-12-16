/**
 * @param {number} n
 * @return {number}
 */
var list = [];
var integerBreak = function(n) {
    list[1] = 1;
    list[2] = 1;
    list[3] = 2;
    for(var i = 4; i <= n; i++){
        var max = -1;
        for(var j = 1; j <= i - 1; j++) {
            if (max < j * list[i - j]) {
                max = j * list[i - j];
            }
            if(max < j * (i - j)) {
                max = j * (i - j);
            }
        }
        list[i] = max;
    }
    return list[n];
};