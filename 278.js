var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    for(var i = 1; i <= n; i++){
      if(isBadVersion(i)){
        break;
      }
    }
    return i;
  };
};