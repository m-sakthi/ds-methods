const ListNode = require("../list-node");

// Stack follows LIFO - Last In First Out
//
// Stack can be implemented with Array or LinkedList.
// Below is an implementation with LinkedList.
//
function Stack() {
  this.top = null;
  this.bottom = null;
  this.length = 0;
}

// Peek return the top most item in the list
// Time complexity - O(1)
// 
Stack.prototype.peek = function() {
  return this.top;
};

// Push adds an item to the last
// Time complexity - O(1)
// 
Stack.prototype.push = function(value) {
  const newNode = new ListNode(value);

  if (this.length === 0) {
    this.top = newNode;
    this.bottom = newNode;
  } else {
    newNode.next = this.top;
    this.top = newNode;
  }
  this.length++;

  return this;
};

// Pop removes the last item from the list
// Time complexity - O(1)
// 
Stack.prototype.pop = function() {
  if(this.length > 0) {
    const pointer = this.top.next;
    this.top = pointer;
    this.length--;
  }

  if(this.length === 0) this.bottom = null;

  return this;
};

// Lookup
// Time complexity - O(n)
// 
Stack.prototype.lookup = function(position) {
  let currentNode = this.top;
  let i = 1;

  while(i !== position) {
    currentNode = currentNode.next;
    i++;
  }

  return currentNode.value;
};

module.exports = Stack;