function Node(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

// BinarySearchTree
// New node will be added to left if it has lesser or else added to right
// 
function BinarySearchTree () {
  this.root = null;
};

// Inserts a node
// 
BinarySearchTree.prototype.insert = function(value) {
  const newNode = new Node(value);
  if (!this.root) {
    this.root = newNode;
  } else {
    let currentNode = this.root;
    while(true) {
      if (value < currentNode.value) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } 
        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } 
        currentNode = currentNode.right;
      }
    }
  }
};

// Finds and returns node if a value is present in the tree
// 
BinarySearchTree.prototype.lookup = function(value) {
  if(!this.root || !value) {
    return false;
  } else {
    let currentNode = this.root;
    while(currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return false;
  }
};

// Traverses and prints the while tree
// 
BinarySearchTree.traverse = function(node) {
  const tree = { value: node.value };
  tree.left = node.left ? this.traverse(node.left) : null;
  tree.right = node.right ? this.traverse(node.right) : null;
  return tree;
}

module.exports = BinarySearchTree;