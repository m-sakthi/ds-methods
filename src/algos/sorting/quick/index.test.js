const sort = require('./index');

describe("sort", () => {
  it("should return empty array if passed array string", () => {
    expect(sort([], 0, 0)).toEqual([]);
  });

  it("should sort the given array in ascending order", () => {
    const arr = [3, 2, 1];
    expect(sort(arr, 0, 2)).toEqual([1, 2, 3]);
  });

  it("should sort the given array with 10 elements", () => {
    const arr = [1, 10, 44, 20, 9, 5, 6, 8, 3, 0, 7];
    expect(sort(arr, 0, 10)).toEqual([0, 1, 3, 5, 6, 7, 8, 9, 10, 20, 44]);
  });

  it("should sort the given array with 50 elements", () => {
    const sortedArray = Array(50).fill().map((_, i) => i);
    const unsortedArray = [...sortedArray].sort(() => 0.5 - Math.random());
    expect(sort(unsortedArray, 0, 49)).toEqual(sortedArray);
  });

  it("should sort the given array with 100 elements", () => {
    const sortedArray = Array(100).fill().map((_, i) => i);
    const unsortedArray = [...sortedArray].sort(() => 0.5 - Math.random());
    expect(sort(unsortedArray, 0, 99)).toEqual(sortedArray);
  });
});
