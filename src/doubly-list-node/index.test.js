const ListNode = require('./index');

describe('ListNode', () => {
  it('should create a new object', () => {
    const value = 10;
    const node = new ListNode(value);

    expect(node).toBeInstanceOf(ListNode);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });

  it('should create a new object with value and next', () => {
    const value = 10;
    const next = 20;
    const prev = 30;
    const node = new ListNode(value, prev, next);

    expect(node).toBeInstanceOf(ListNode);
    expect(node.value).toEqual(value);
    expect(node.next).toEqual(next);
    expect(node.prev).toEqual(prev);
  });
});