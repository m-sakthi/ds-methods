const ListNode = require('./index');

describe('ListNode', () => {
  it('should create a new object', () => {
    const value = 10;
    const node = new ListNode(value);

    expect(node).toBeInstanceOf(ListNode);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });

  it('should create a new object with value and next', () => {
    const value = 10;
    const next = 20;
    const node = new ListNode(value, next);

    expect(node).toBeInstanceOf(ListNode);
    expect(node.value).toEqual(value);
    expect(node.next).toEqual(next);
  });
});