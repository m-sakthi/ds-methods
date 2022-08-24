const Queue = require('./index');

describe('Queue', () => {
  describe('constructor', () => {
    it('should initialise a queue object', () => {
      const queue = new Queue();
      expect(queue.first).toBeNull();
      expect(queue.last).toBeNull();
      expect(queue.length).toBe(0);
    });
  });

  describe('enqueue', () => {
    it('should add a value when no node is present', () => {
      const queue = new Queue();
      queue.enqueue(10);
      expect(queue.first.value).toEqual(10);
      expect(queue.last.value).toEqual(10);
      expect(queue.length).toEqual(1);
    });

    it('should add a value when already a node is present', () => {
      const queue = new Queue();
      queue.enqueue(10).enqueue(20);
      expect(queue.first.value).toEqual(10);
      expect(queue.last.value).toEqual(20);
      expect(queue.length).toEqual(2);
    });
  });

  describe('dequeue', () => {
    it('should remove first value from the queue', () => {
      const queue = new Queue();
      queue.enqueue(10);

      expect(queue.first.value).toEqual(10);
      expect(queue.last.value).toEqual(10);
      expect(queue.length).toEqual(1);
      
      queue.dequeue();
      expect(queue.first).toBeNull();
      expect(queue.last).toBeNull();
      expect(queue.length).toEqual(0);
    });

    it('should remove first value from the queue with multiple items', () => {
      const queue = new Queue();
      queue.enqueue(10).enqueue(20);
      expect(queue.first.value).toEqual(10);
      expect(queue.last.value).toEqual(20);
      expect(queue.length).toEqual(2);

      queue.dequeue();
      expect(queue.first.value).toEqual(20);
      expect(queue.last.value).toEqual(20);
      expect(queue.length).toEqual(1);
    });

    it('should return instane if queue is empty', () => {
      const queue = new Queue();
      
      queue.dequeue();
      expect(queue.first).toBeNull();
      expect(queue.last).toBeNull();
      expect(queue.length).toEqual(0);
    });
  });

  describe('peek', () => {
    it('should return null when no node is present', () => {
      const queue = new Queue();
      expect(queue.peek()).toBeNull();
    });

    it('should return first node when nodes is present', () => {
      const queue = new Queue();
      queue.enqueue(1);

      expect(queue.peek().value).toEqual(1);
    });
  });

  describe('lookup', () => {
    it('should return the value at a given position', () => {
      const queue = new Queue();
      queue.enqueue(10).enqueue(20).enqueue(30).enqueue(40);

      expect(queue).toBeInstanceOf(Queue);
      expect(queue.lookup(1)).toEqual(10);
      expect(queue.lookup(2)).toEqual(20);
      expect(queue.lookup(3)).toEqual(30);
      expect(queue.lookup(4)).toEqual(40);
    });
  });
});