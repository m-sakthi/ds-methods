const fibonacci = require('./index');

describe("fibonacci", () => {
  it("should return 0 when n equal to 0", () => {
    expect(fibonacci(0)).toEqual(0);
  });
  
  it("should return 1 when n equal to 1", () => {
    expect(fibonacci(1)).toEqual(1);
  });

  it("should return 1 when n equal to 2", () => {
    expect(fibonacci(2)).toEqual(1);
  });

  it("should return 2 when n equal to 3", () => {
    expect(fibonacci(3)).toEqual(2);
  });

  it("should return 8 when n equal to 6", () => {
    expect(fibonacci(6)).toEqual(8);
  });

  it("should return 55 when n equal 10", () => {
    expect(fibonacci(10)).toEqual(55);
  });

  it("should return fibonacci number when n equal 25", () => {
    expect(fibonacci(25)).toEqual(75025);
  });

  it("should return fibonacci number when n equal 40", () => {
    expect(fibonacci(40)).toEqual(102334155);
  });

  it("should return fibonacci number when n equal 50", () => {
    expect(fibonacci(45)).toEqual(1134903170);
  });

  it("should return fibonacci when n equal to greater than 1", () => {
    expect(fibonacci(100)).toEqual(354224848179262000000);
  });
});
