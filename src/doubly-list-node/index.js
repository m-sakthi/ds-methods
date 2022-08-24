function DoublyListNode(value, prev=null, next=null) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

module.exports = DoublyListNode;