const Stack = require('./index');

describe('Stack', () => {
  describe('constructor', () => {
    it('should initialise a Stack', () => {
      const stack = new Stack();
      expect(stack).toBeInstanceOf(Stack);
      expect(stack.top).toBeNull();
      expect(stack.bottom).toBeNull();
      expect(stack.length).toEqual(0);
    });
  });

  describe('push', () => {
    it('should add an item to the stack', () => {
      const stack = new Stack();
      stack.push(1);

      expect(stack.top.value).toEqual(1);
      expect(stack.top.next).toBeNull();
      expect(stack.bottom.value).toEqual(1);
      expect(stack.bottom.next).toBeNull();
      expect(stack.length).toEqual(1);
    });

    it('should add an item to the top of the stack', () => {
      const stack = new Stack();
      stack.push(1).push(2).push(3);

      expect(stack.top.value).toEqual(3);
      expect(stack.top.next.value).toEqual(2);
      expect(stack.bottom.value).toEqual(1);
      expect(stack.bottom.next).toBeNull();
      expect(stack.length).toEqual(3);
    });
  });

  describe('pop', () => {
    it('should remove an item from the stack', () => {
      const stack = new Stack();
      stack.push(1);
      stack.pop();

      expect(stack.top).toBeNull();
      expect(stack.bottom).toBeNull();
      expect(stack.length).toEqual(0);
    });

    it('should return instamce when no node is present in stack', () => {
      const stack = new Stack();
      stack.pop();

      expect(stack.top).toBeNull();
      expect(stack.bottom).toBeNull();
      expect(stack.length).toEqual(0);
    });

    it('should remove an item from the top of the stack', () => {
      const stack = new Stack();
      stack.push(1).push(2).push(3);

      expect(stack.top.value).toEqual(3);
      expect(stack.top.next.value).toEqual(2);
      expect(stack.bottom.value).toEqual(1);
      expect(stack.bottom.next).toBeNull();
      expect(stack.length).toEqual(3);

      stack.pop();
      expect(stack.top.value).toEqual(2);
      expect(stack.top.next.value).toEqual(1);
      expect(stack.bottom.value).toEqual(1);
      expect(stack.bottom.next).toBeNull();
      expect(stack.length).toEqual(2);
    });
  });

  describe('peek', () => {
    it('should return the top most value of the stack', () => {
      const stack = new Stack();
      stack.push(1).push(2);

      expect(stack).toBeInstanceOf(Stack);
      const topVal = stack.peek();
      expect(topVal).toEqual(stack.top);
      expect(topVal.value).toEqual(2);
    });
  });

  describe('lookup', () => {
    it('should return the value at a given position', () => {
      const stack = new Stack();
      stack.push(10).push(20).push(30).push(40);

      expect(stack).toBeInstanceOf(Stack);
      expect(stack.lookup(4)).toEqual(10);
      expect(stack.lookup(3)).toEqual(20);
      expect(stack.lookup(2)).toEqual(30);
      expect(stack.lookup(1)).toEqual(40);
    });
  });
});