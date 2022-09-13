const sort = require('./index');

describe("sort", () => {
  it("should return empty array if passed array string", () => {
    expect(sort([])).toEqual([]);
  });

  it("should sort the given array in ascending order", () => {
    expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("should sort the given array with 10 elements", () => {
    expect(sort([1, 10, 4, 2, 9, 5, 6, 8, 3, 0, 7])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should sort the given array with 50 elements", () => {
    const sortedArray = Array(50).fill().map((_, i) => i);
    const unsortedArray = sortedArray.sort(() => 0.5 - Math.random());
    expect(sort(unsortedArray)).toEqual(sortedArray);
  });

  it("should sort the given array with 100 elements", () => {
    const sortedArray = Array(100).fill().map((_, i) => i);
    const unsortedArray = [...sortedArray].sort(() => 0.5 - Math.random());
    expect(sort(unsortedArray)).toEqual(sortedArray);
  });
});
