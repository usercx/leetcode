var solution = function(isBadVersion) {
  return function(n) {
    let left = 1, right = n;
    while(left < right){
      let z = parseInt((left + right) / 2);
      if(isBadVersion(z)){
        right = z - 1;
      } else {
        left = z + 1;
      }
    }
    return isBadVersion(left) ? left : left + 1;
  };
};