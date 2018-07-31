
function Treenode(key){
  this.key = key;
  this.left = this.right = null;
}
/**
 * @param {number} capacity
 */

// 置换算法，最久不用的丢弃
// 空间换时间，一个双向链表存储使用的次序（头部代表最新，尾部代表最后，如果需要置换的话，尾部最先出去）
// 数组存储value
var LRUCache = function(capacity) {
  this.size = 0;
  this.max = capacity;
  this.head = null;
  this.tail = null;
  this.hash = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(!this.hash[key] || this.max === 0){
    return -1;
  }
  // 获取节点
  let node = this.hash[key].node;
  // 如果是头部的话就什么都不用操作
  if(node === this.head){
    return this.hash[key].val;
  }
  // 修改node的左右关系
  if(node === this.tail){
    this.tail = this.tail.left;
    this.tail.right = null;
  } else{
    node.left.right = node.right;
    node.right.left = node.left;
  }

  this.head.left = node;
  node.left = null;
  node.right = this.head;
  this.head = node;
  return this.hash[key].val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // 如果已存在
  if(this.hash[key]){
    this.hash[key].val = value;
    let node = this.hash[key].node;
    // 如果node是头部，什么都不用操作
    if(node === this.head){
      return ;
    }
    // 如果node是尾部的话更新this.tail
    if(node === this.tail){
      this.tail = this.tail.left;
      this.tail.right = null;
    } else{
      node.left.right = node.right;
      node.right.left = node.left;
    }
    this.head.left = node;
    node.left = null;
    node.right = this.head;
    this.head = node;
    return ;
  }
  // 如果不存在
  if(!this.hash[key]){
    let node = new Treenode(key);
    this.hash[key] = {
      key: key,
      val: value,
      node: node,
    };
    // 肯定先将这个插入到头部
    node.right = this.head;
    // 如果是首次插入，尾部也需赋值
    if(this.size === 0){
      this.tail = node;
    } else {
      this.head.left = node;
    }
    this.head = node;
    // 如果未满，无需操作
    // 如果已满，去除尾部
    if(this.size === this.max){
      this.hash[this.tail.key] = null;
      this.tail = this.tail.left;
      this.tail.right = 0;
    } else {
      this.size++;
    }
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache( 2 /* capacity */ );

console.log(cache.put(1, 1));
console.log(cache.put(2, 2));
console.log(cache.get(1));       // returns 1
console.log(cache.put(3, 3));    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
console.log(cache.put(4, 4));    // evicts key 1
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4