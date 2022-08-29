const BinarySearchTree = require("./index");

describe("BinarySearchTree", () => {
  describe("constructor", () => {
    it("should initialise a BinarySearchTree", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);
      expect(bst.root).toBeNull();
    });
  });

  describe("insert", () => {
    it("should add a node to the BinarySearchTree as root node", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      const newNode = 2;
      bst.insert(newNode);

      expect(bst.root.value).toBe(newNode);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
    });

    it("should add a node left of root node if it has smaller value", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      const rootNode = 5;
      bst.insert(rootNode);

      expect(bst.root.value).toEqual(rootNode);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();

      const leftNode = 3;
      bst.insert(leftNode);
      expect(bst.root.right).toBeNull();
      expect(bst.root.left.value).toEqual(leftNode);
      expect(bst.root.left.left).toBeNull();
      expect(bst.root.left.right).toBeNull();
    });

    it("should add a node left to the child of root node if it has smaller value", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      const rootNode = 5;
      bst.insert(rootNode);

      expect(bst.root.value).toEqual(rootNode);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();

      const leftNode1 = 3;
      const leftNode2 = 2;
      bst.insert(leftNode1);
      bst.insert(leftNode2);
      expect(bst.root.right).toBeNull();
      expect(bst.root.left.value).toEqual(leftNode1);
      expect(bst.root.left.left.value).toEqual(leftNode2);
      expect(bst.root.left.right).toBeNull();
    });

    it("should add a node right of root node if it has greater value", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      const rootNode = 5;
      bst.insert(rootNode);

      expect(bst.root.value).toEqual(rootNode);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();

      const rightNode = 6;
      bst.insert(rightNode);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right.value).toEqual(rightNode);
      expect(bst.root.right.left).toBeNull();
      expect(bst.root.right.right).toBeNull();
    });

    it("should add a node right to child of root node if it has greater value", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      const rootNode = 5;
      bst.insert(rootNode);

      expect(bst.root.value).toEqual(rootNode);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();

      const rightNode1 = 6;
      const rightNode2 = 7;
      bst.insert(rightNode1);
      bst.insert(rightNode2);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right.value).toEqual(rightNode1);
      expect(bst.root.right.right.value).toEqual(rightNode2);
      expect(bst.root.right.left).toBeNull();
    });
  });

  describe("lookup", () => {
    it("should return false if root node is not available", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);
      expect(bst.root).toBeNull();

      expect(bst.lookup(10)).toBe(false);
    });

    it("should return the value if present", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      const rootNode = 5;
      bst.insert(rootNode);

      expect(bst.lookup(rootNode).value).toEqual(rootNode);
    });

    it("should return the value if present in child right nodes", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      const nodeValue = 5;
      bst.insert(4);
      bst.insert(nodeValue);

      expect(bst.lookup(nodeValue).value).toEqual(nodeValue);
    });

    it("should return the value if present in child left nodes", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      const nodeValue = 5;
      bst.insert(6);
      bst.insert(nodeValue);

      expect(bst.lookup(nodeValue).value).toEqual(nodeValue);
    });

    it("should return false if the value is not present in the child nodes", () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      const nodeValue = 5;
      bst.insert(nodeValue);

      expect(bst.lookup(10)).toBe(false);
    });
  });

  describe("traverse", () => {
    it("should print all the nodes", () => {
      const expected = {
        value: 10,
        left: {
          value: 8,
          left: { value: 7, left: null, right: null },
          right: { value: 9, left: null, right: null },
        },
        right: {
          value: 12,
          left: { value: 11, left: null, right: null },
          right: { value: 16, left: null, right: null },
        },
      };
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);

      bst.insert(10);
      bst.insert(8);
      bst.insert(12);
      bst.insert(11);
      bst.insert(16);
      bst.insert(7);
      bst.insert(9);
      expect(BinarySearchTree.traverse(bst.root)).toEqual(expected);
    });
  });
});
