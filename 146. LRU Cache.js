/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, 
it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2  // capacity  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

/**
 * @param {number} capacity
 */

class Node {
  constructor(key, val) {
      this.key = key
      this.value = val
      this.prev = null
      this.next = null
  }
}

class DoublelyLinkedList {
  constructor() {
      this.head = null
      this.tail = null
  }
  
  appendToHead(node) {
    if (!this.head && !this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
  }

  appendToTail(node) {
    if (!this.head && !this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
  }

  isHead(node) {
    return node.prev === null
  }

  isTail(node) {
    return node.next === null
  }

  removeTail() {
    let node = this.tail
    let prev = node.prev

    if (!prev) {
      this.head = null
      this.tail = null
      return node
    }

    prev.next = null
    this.tail = prev

    return node
  }

  moveToHead(node) {
    if (this.isHead(node)) {
      return
    }

    if (this.isTail(node)) {
      this.removeTail()
      node.prev = null
      node.next = this.head
      this.head.prev = node
      this.head = node
      return
    }

    let prev = node.prev
    let next = node.next
    prev.next = next
    next.prev = prev
    node.prev = null
    this.appendToHead(node)
  }
}

var LRUCache = function(capacity) {
  this.queue = new DoublelyLinkedList()
  this.cache = {}
  this.size = 0
  this.capacity = capacity
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  let node = this.cache[key]
  
  if (node) {
    this.queue.moveToHead(node)
    return node.value
  }

  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  let node = this.cache[key]

  if (node) {
    node.value = value
    this.queue.moveToHead(node)
    return
  }

  if (this.size === this.capacity) {
    let removedNode = this.queue.removeTail()
    delete this.cache[removedNode.key]
    this.size--
  }

  node = new Node(key, value)
  this.queue.appendToHead(node)
  this.cache[key] = node
  this.size++
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = Object.create(LRUCache).createNew(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

let cache = new LRUCache(2)

// cache.put(1, 1)
// cache.put(2, 2)
// console.log(cache.get(1))
// cache.put(3, 3);    // evicts key 2
// console.log(cache.get(2));       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// console.log(cache.get(1));       // returns -1 (not found)
// console.log(cache.get(3));       // returns 3
// console.log(cache.get(4));       // returns 4
console.log(cache.get(2)) // null
cache.put(2, 6) 
console.log(cache.get(1)) // null
cache.put(1, 5)
cache.put(1, 2)
console.log(cache.get(1))
console.log(cache.get(2))
