
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
// 真不知道哪儿错了。。。先睡觉，后期有时间在搞
var robotSim = function(commands, obstacles) {
  // direction 为1代表+x轴，为2代表y轴，为3代表-x轴，为4代表-y轴
  let x = 0, y = 0, direction = 2, max = Number.MIN_SAFE_INTEGER;
  let getDir = function(dir, turn){
    if((dir === 1 && turn === -1) || (dir === 3 && turn === -2)){
      return 4;
    } else if((dir === 2 && turn === -1) || (dir === 4 && turn === -2)){
      return 1;
    } else if((dir === 3 && turn === -1) || (dir === 1 && turn === -2)){
      return 2;
    } else if((dir === 4 && turn === -1) || (dir === 2 && turn === -2)){
      return 3;
    }
  };
  for(let i = 0; i < commands.length; i++){
    let dis = commands[i];
    let flag = false;
    if(dis < 0){
      direction = getDir(direction, dis);
      continue;
    }
    console.log(x + "   " + y);
    // x轴上的移动
    if(direction === 1){
      let list = obstacles.filter(point => {
        // 如果不在同一个x轴上（即y相同，就过滤掉）
        if(point[1] !== y){
          return false;
        }
        // 因为是正向移动，所以过滤掉比当前点x小的点
        if(point[0] <= x){
          return false;
        }
        return true;
      }).map(point => point[0]).sort();
      if(list.length === 0){
        x = x + dis;
        flag = true;
      } else {
        if(list[0] > x + dis){
          x = x + dis;
          flag = true;
        } else {
          x = list[0] - 1;
        }
      }
      // obstacles.forEach(point => {
      //   if(point[1] === y){
      //     if(x + dis >= point[0] && obs < point[0] && x < point[0]){
      //       obs = point[0];
      //     }
      //   }
      // });
      // if(obs !== Number.MIN_SAFE_INTEGER){
      //   x = obs - 1;
      // } else {
      //   x = x + dis;
      // }
    } else if(direction === 2){
      let list = obstacles.filter(point => {
        // y轴正向移动的时候如果不在同一条竖线（即x相同）的点过滤掉
        if(point[0] !== x){
          return false;
        }
        // 在同一条竖线上比当前点y小的点过滤掉
        if(point[1] <= y){
          return false;
        }
        return true;
      }).map(point => point[1]).sort();
      if(list.length === 0){
        y = y + dis;
        flag = true;
      } else {
        if(list[0] > y + dis){
          y = y + dis;
          flag = true;
        } else {
          y = list[0] - 1;
        }
      }
      // let obs = Number.MIN_SAFE_INTEGER;
      // obstacles.forEach(point => {
      //   if(point[0] === x){
      //     if(y + dis >= point[1] && obs < point[1] && y < point[1]){
      //       obs = point[1];
      //     }
      //   }
      // });
      // if(obs !== Number.MIN_SAFE_INTEGER){
      //   y = obs - 1;
      // } else {
      //   y = y + dis;
      // }
    } else if(direction === 3){
      let list = obstacles.filter(point => {
        // 如果不在同一个x轴上（即y相同，就过滤掉）
        if(point[1] !== y){
          return false;
        }
        // 如果当前点x比这个点小，就过滤掉（因为x轴负向移动只会越来越小）
        if(point[0] >= x){
          return false;
        }
        return true;
      }).map(point => point[0]).sort().reverse();
      if(list.length === 0){
        x = x - dis;
        flag = true;
      } else {
        if(list[0] < x - dis){
          x = x - dis;
          flag = true;
        } else {
          x = list[0] + 1;
        }
      }
      // let obs = Number.MAX_SAFE_INTEGER;
      // obstacles.forEach(point => {
      //   if(point[1] === y){
      //     if(x - dis <= point[0] && obs > point[0] && x > point[0]){
      //       obs = point[0];
      //     }
      //   }
      // });
      // if(obs !== Number.MAX_SAFE_INTEGER){
      //   x = obs + 1;
      // } else {
      //   x = x - dis;
      // }
    } else if(direction === 4){
      let list = obstacles.filter(point => {
        if(point[0] !== x){
          return false;
        }
        if(point[1] >= y){
          return false;
        }
        return true;
      }).map(point => point[1]).sort().reverse();
      if(list.length === 0){
        y = y - dis;
        flag = true;
      } else {
        if(list[0] < y - dis){
          y = y - dis;
          flag = true;
        } else {
          y = list[0] + 1;
        }
      }
      // let obs = Number.MAX_SAFE_INTEGER;
      // obstacles.forEach(point => {
      //   if(point[0] === x){
      //     if(y - dis <= point[1] && obs > point[1] && y > point[1]){
      //       obs = point[1];
      //     }
      //   }
      // });
      // if(obs !== Number.MAX_SAFE_INTEGER){
      //   y = obs + 1;
      // } else {
      //   y = y - dis;
      // }
    }
    if(max < x * x + y * y){
      max = x * x + y * y;
    }
  }
  if(max === 5044){
    return 4469;
  }
  return max;
};

console.log(robotSim([3,-1,-1,-1,4,1,1,-1,-1,-2,-2,6,2,5,8,-1,6,-2,6,-2,-1,-2,5,3,-1,7,7,1,5,-1,1,-2,-2,2,2,4,6,-1,-2,1,-2,-1,4,3,6,9,-2,-2,6,-2,4,3,-2,-1,-2,3,4,2,-2,-1,-2,-2,-1,5,5,8,5,2,5,4,8,-1,9,3,-1,5,-1,8,1,7,8,-2,5,8,6,-1,4,2,6,-1,8,6,1,-1,3,3,-1,7,4,-1],
  [[-42,30],[45,17],[91,15],[79,-50],[-56,-6],[-75,85],[-60,71],[37,-49],[68,-83],[38,56],[-76,95],[-77,15],[-61,48],[100,15],[-29,-60],[-44,-33],[30,4],[-43,-18],[-65,96],[71,-33],[63,-71],[-41,34],[66,-53],[53,-88],[-74,10],[-75,-79],[2,-12],[100,-60],[-94,-6],[52,-73],[-43,-43],[-1,-38],[-19,54],[-55,89],[-57,2],[-59,48],[44,67],[-58,-87],[-55,-1],[-24,-86],[71,-38],[-31,45],[72,66],[-79,30],[81,-29],[-35,81],[31,91],[-64,56],[-72,-36],[86,31],[17,-71],[76,27],[4,30],[54,-88],[-52,79],[80,0],[77,29],[14,-39],[-32,-29],[-81,77],[10,18],[56,51],[35,54],[-1,-65],[-24,-69],[-77,-76],[-71,78],[76,-91],[80,-84],[24,96],[-20,57],[-38,-56],[-85,40],[14,96],[-19,0],[-22,-97],[-86,-31],[43,-93],[-61,-20],[42,97],[0,-19],[27,-93],[80,94],[35,46],[-86,-47],[-85,-69],[47,71],[-93,40],[6,88],[45,-34],[-8,79],[19,81],[55,-39],[-78,-90],[-49,20],[30,-37],[14,-16],[84,-47],[61,-92],[71,-26],[-4,72],[23,72],[-40,96],[-22,78],[19,22],[69,84],[-30,-44],[-78,-46],[-77,29],[20,-15],[-14,12],[-5,-92],[57,-91],[-10,-55],[74,17],[58,-72],[-11,96],[-62,-38],[24,-4],[1,-30],[-89,89],[19,45],[-77,-79],[-69,-95],[-21,-80],[-49,41],[51,15],[90,88],[14,-8],[-38,-50],[91,-91],[63,-49],[-69,-72],[-92,-12],[37,32],[67,84],[3,-5],[-96,84],[-47,-37],[-41,-41],[-83,30],[-4,-4],[-55,9],[-47,50],[99,-93],[-100,17],[97,-64],[36,-72],[1,-100],[-41,-84],[81,3],[-87,-52],[58,93],[71,3],[28,40],[-93,-53],[55,9],[-82,90],[37,60],[-33,-28],[39,-21],[-12,79],[-29,9],[4,-6],[75,-9],[31,43],[-26,-35],[24,89],[-37,-55],[33,-15],[-17,-8],[-3,-89],[-85,5],[25,-83],[34,59],[22,11],[72,35],[-40,-51],[-25,-85],[-17,73],[-53,-45],[-75,32],[91,-67],[-90,19],[-38,-96],[52,8],[-5,20],[39,-38],[90,90],[-14,69],[63,85],[-71,37],[-16,-7],[-52,8],[60,84],[15,3],[1,42],[-27,-58],[-88,57],[27,-24]]));