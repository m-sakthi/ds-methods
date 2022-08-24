const ListNode = require("../list-node");

// Example linked List
// { value: 5, next: { value: 4, next: { value: 3, next: { ... } } } }

function LinkedList(value) {
  const newNode = new ListNode(value);

  this.head = newNode;
  this.tail = newNode;
  this.length = 1;
};

// Inserts a node at the end of the list
// 
LinkedList.prototype.append = function(value) {
  const newNode = new ListNode(value);

  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;

  return this;
}

// Inserts a node at the start of the list
// 
LinkedList.prototype.prepend = function(value) {
  const newNode = new ListNode(value, this.head);
  this.head = newNode;
  this.length++;

  return this;
}

// Inserts a value in the list for a given position
// Below is the depiction of how a new node should be inserted
// 
// 1 - 3       1   3       1   3      1 - 2 - 3
//              \           \ / 
//   2           2           2  
// 
LinkedList.prototype.insert = function(value, position) {
  const newNode = new ListNode(value, this.head);
  if (position <= 1) this.prepend(value);
  else if (position > this.length) this.append(value);
  else {
    const pointer = this.findNode(position - 1);
    newNode.next = pointer.next;
    pointer.next = newNode;
    this.length++;
  }
  
  return this;
}

// Deletes a node from the linked list for a given position
// 
LinkedList.prototype.remove = function(position) {
  if(position < 1 || position > this.length) return this;
  const pointer = this.findNode(position - 1);
  const nodeToBeDeleted = pointer.next;
  pointer.next = nodeToBeDeleted.next;
  this.length--;

  return this;
}

LinkedList.prototype.reverse = function() {
  if (!this.head.next) return this;

  let first = this.head;
  let second = first.next;
  this.tail = this.head;
  while(second) {
    let temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  this.head.next = null;
  this.head = first;

  return this;
}

// Finds the list item for a given position
// 
LinkedList.prototype.findNode = function(position) {
  let i = 1;
  let pointer = this.head;
  while (i !== position) {
    pointer = pointer.next;
    i++;
  }
  
  return pointer;
}

// Converts the linked list to an array
// 
LinkedList.prototype.toArray = function() {
  const arr = [];
  let currentNode = this.head;
  while(currentNode) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }

  return arr;
}

module.exports = LinkedList;