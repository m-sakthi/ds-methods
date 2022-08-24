const DoublyListNode = require("../doubly-list-node");

// Example linked List
// { value: 5, next: { value: 4, next: { value: 3, next: { ... } } } }

function DoublyLinkedList(value) {
  const newNode = new DoublyListNode(value);

  this.head = newNode;
  this.tail = newNode;
  this.length = 1;
};

// Inserts a node at the end of the list
// 
DoublyLinkedList.prototype.append = function(value) {
  const newNode = new DoublyListNode(value);

  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;

  return this;
}

// Inserts a node at the start of the list
// 
DoublyLinkedList.prototype.prepend = function(value) {
  const newNode = new DoublyListNode(value, null ,this.head);
  this.head.prev = newNode;
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
DoublyLinkedList.prototype.insert = function(value, position) {
  const newNode = new DoublyListNode(value, this.head);
  if (position <= 1) this.prepend(value);
  else if (position > this.length) this.append(value);
  else {
    const pointer = this.findNode(position - 1);
    const follower = pointer.next;
    pointer.next = newNode;
    newNode.prev = pointer;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
  }
  
  return this;
}

// Deletes a node from the linked list for a given position
// 
DoublyLinkedList.prototype.remove = function(position) {
  if(position < 1 || position > this.length) return this;
  const pointer = this.findNode(position - 1);
  const nodeToBeDeleted = pointer.next;
  const follower = nodeToBeDeleted.next;
  follower.prev = pointer;
  pointer.next = follower;
  this.length--;

  return this;
}

// Finds the list item for a given position
// 
DoublyLinkedList.prototype.findNode = function(position) {
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
DoublyLinkedList.prototype.toArray = function() {
  const arr = [];
  let currentNode = this.head;
  while(currentNode) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }

  return arr;
}

// Prints the linked list in array format for better visualisation.
// 
DoublyLinkedList.prototype.print = function() {
  console.log(this.toArray());
}


module.exports = DoublyLinkedList;