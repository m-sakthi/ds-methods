const ListNode = require("../list-node");

// Queue follows FIFO - First In First Out
// 
function Queue() {
  this.first = null;
  this.last = null;
  this.length = 0;
}

// Peek return the top most item in the list
// Time complexity - O(1)
// 
Queue.prototype.peek = function() {
  return this.first;
};

// Push adds an item to the last
// Time complexity - O(1)
// 
Queue.prototype.enqueue = function(value) {
  const newNode = new ListNode(value);

  if(this.length === 0){
    this.first = newNode;
    this.last = newNode;
  } else {
    this.last.next = newNode;
    this.last = newNode;
  }
  this.length++;

  return this;
};

// Pop removes the last item from the list
// Time complexity - O(1)
// 
Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    this.first = this.first.next;
    this.length--;
  
    if (this.length === 0) this.last = null;
  }

  return this;
};

// Lookup
// Time complexity - O(n)
// 
Queue.prototype.lookup = function(position) {
  let currentNode = this.first;
  let i = 1;

  while(i !== position) {
    currentNode = currentNode.next;
    i++;
  }

  return currentNode.value;
};

module.exports = Queue;