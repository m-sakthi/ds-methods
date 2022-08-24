const LinkedList = require('./index');

describe('LinkedList', () => {
  describe('constructor', () => {
    it('should create a new LinkedList object', () => {
      const expected = { value: 1, next: null };
      const linkedList = new LinkedList(1);
  
      expect(linkedList).toBeInstanceOf(LinkedList);
      expect(linkedList.head).toEqual(expected);
      expect(linkedList.tail).toEqual(expected);
      expect(linkedList.length).toEqual(1);
    });
  });

  describe('append', () => {
    it('should add value to the end of the linked list', () => {
      const expectedTail = { value: 2, next: null };
      const expected = { value: 1, next: expectedTail };
      const linkedList = new LinkedList(1);

      expect(linkedList.length).toEqual(1);
      linkedList.append(2);

      expect(linkedList).toBeInstanceOf(LinkedList);
      expect(linkedList.head).toEqual(expected);
      expect(linkedList.tail).toEqual(expectedTail);
      expect(linkedList.length).toEqual(2);
    });
  });

  describe('prepend', () => {
    it('should add value to the start of the linked list', () => {
      const expectedTail = { value: 1, next: null };
      const expected = { value: 2, next: { value: 1, next: null } };
      const linkedList = new LinkedList(1);

      expect(linkedList.length).toEqual(1);
      linkedList.prepend(2);

      expect(linkedList).toBeInstanceOf(LinkedList);
      expect(linkedList.head).toEqual(expected);
      expect(linkedList.tail).toEqual(expectedTail);
      expect(linkedList.length).toEqual(2);
    });
  });

  describe('insert', () => {
    it('should add value at the given insert position', () => {
      const expectedTail = { value: 1, next: null };
      const expected = { value: 3, next: { value: 5, next: { value: 2, next: expectedTail } } };
      const linkedList = new LinkedList(3);

      linkedList.append(2);
      linkedList.append(1);
      expect(linkedList.length).toEqual(3);

      linkedList.insert(5, 2);

      expect(linkedList).toBeInstanceOf(LinkedList);
      expect(linkedList.head).toEqual(expected);
      expect(linkedList.tail).toEqual(expectedTail);
      expect(linkedList.length).toEqual(4);
    });

    it('should add value to the end when given insert position is greater than length', () => {
      const expectedTail = { value: 2, next: null };
      const expected = { value: 1, next: expectedTail };
      const linkedList = new LinkedList(1);

      expect(linkedList.length).toEqual(1);
      linkedList.insert(2, 10);

      expect(linkedList).toBeInstanceOf(LinkedList);
      expect(linkedList.head).toEqual(expected);
      expect(linkedList.tail).toEqual(expectedTail);
      expect(linkedList.length).toEqual(2);
    });

    it('should add value to the start when given insert position is lesser than 1', () => {
      const expectedTail = { value: 1, next: null };
      const expected = { value: 2, next: { value: 1, next: null } };
      const linkedList = new LinkedList(1);

      expect(linkedList.length).toEqual(1);
      linkedList.insert(2, 0);

      expect(linkedList).toBeInstanceOf(LinkedList);
      expect(linkedList.head).toEqual(expected);
      expect(linkedList.tail).toEqual(expectedTail);
      expect(linkedList.length).toEqual(2);
    });
  });

  describe('remove', () => {
    it('should delete element from given position', () => {
      const expectedTail = { value: 1, next: null };
      const expected = { value: 3, next: expectedTail };
      const linkedList = new LinkedList(3);

      linkedList.append(5);
      linkedList.append(1);
      expect(linkedList.length).toEqual(3);

      linkedList.remove(2);

      expect(linkedList).toBeInstanceOf(LinkedList);
      expect(linkedList.head).toEqual(expected);
      expect(linkedList.tail).toEqual(expectedTail);
      expect(linkedList.length).toEqual(2);
    });

    it('should return the list with no change if given position is lesser than 1', () => {
      const expectedTail = { value: 1, next: null };
      const expected = { value: 3, next: { value: 5, next: expectedTail } };
      const linkedList = new LinkedList(3);

      linkedList.append(5);
      linkedList.append(1);
      expect(linkedList.length).toEqual(3);

      linkedList.remove(0);

      expect(linkedList).toBeInstanceOf(LinkedList);
      expect(linkedList.head).toEqual(expected);
      expect(linkedList.tail).toEqual(expectedTail);
      expect(linkedList.length).toEqual(3);
    });

    it('should return the list with no change if given position is greater than length', () => {
      const expectedTail = { value: 1, next: null };
      const expected = { value: 3, next: { value: 5, next: expectedTail } };
      const linkedList = new LinkedList(3);

      linkedList.append(5);
      linkedList.append(1);
      expect(linkedList.length).toEqual(3);

      linkedList.remove(4);

      expect(linkedList).toBeInstanceOf(LinkedList);
      expect(linkedList.head).toEqual(expected);
      expect(linkedList.tail).toEqual(expectedTail);
      expect(linkedList.length).toEqual(3);
    });
  });

  describe('findNode', () => {
    it('should return the found node at a given position', () => {
      const linkedList = new LinkedList(3);
      linkedList.append(5).append(1);

      const received1 = linkedList.findNode(1);
      const received2 = linkedList.findNode(2);
      const received3 = linkedList.findNode(3);
      const received4 = linkedList.findNode(4);

      expect(received1.value).toEqual(3);
      expect(received2.value).toEqual(5);
      expect(received3.value).toEqual(1);
      expect(received4).toBeNull();
    });
  });

  describe('toArray', () => {
    it('should return an array of linked list node values', () => {
      const linkedList = new LinkedList(1);
      linkedList.append(2).append(3).append(4);

      expect(linkedList.toArray()).toEqual([1, 2, 3, 4]);
    });
  });

  describe('reverse', () => {
    it('should return the reversed list', () => {
      const linkedList = new LinkedList(1);
      linkedList.append(2).append(3).append(4);

      const reversedList = linkedList.reverse();

      expect(reversedList.toArray()).toEqual([4, 3, 2, 1]);
    });

    it('should return the head if the list has only one node', () => {
      const linkedList = new LinkedList(1);

      const reversedList = linkedList.reverse();

      expect(reversedList.toArray()).toEqual([1]);
    });
  });
});