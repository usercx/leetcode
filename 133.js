/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  if(!graph){
    return null;
  }
  // 标记是否已被访问
  let visit = [];
  // 要拷贝的内容存放在这里
  let obj = [];
  let quene = [graph];
  while(quene.length > 0){
    let current = quene.pop();
    let label = current.label;
    if(visit[label]){
      continue;
    }
    visit[label] = true;
    if(!obj[label]){
      obj[label] = new UndirectedGraphNode(label);
    }
    for(let i = 0; i < current.neighbors.length; i++){
      let index = current.neighbors[i];
      // 如果这个没被便利过就放进去等着遍历
      if(!visit[index]){
        quene.unshift(index);
      }
      // 如果不存在index这个拷贝的，就拷贝index
      if(!obj[index.label]){
        obj[index.label] = new UndirectedGraphNode(index.label);
      }
      // 添加neighbors的关系
      obj[label].neighbors.push(obj[index.label]);
    }
  }
  return obj[graph.label];
};