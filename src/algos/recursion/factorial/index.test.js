const factorial = require('./index');

describe("factorial", () => {
  it("should return 1 when n equal to -1", () => {
    expect(factorial(-1)).toEqual(1);
  });

  it("should return 1 when n equal to 0", () => {
    expect(factorial(0)).toEqual(1);
  });
  
  it("should return 1 when n equal to 1", () => {
    expect(factorial(1)).toEqual(1);
  });

  it("should return 2 when n equal to 2", () => {
    expect(factorial(2)).toEqual(2);
  });

  it("should return factorial when n equal to greater than 1", () => {
    expect(factorial(5)).toEqual(120);
  });

  it("should return factorial of 10", () => {
    expect(factorial(10)).toEqual(3628800);
  });

  it("should return factorial of 50", () => {
    expect(factorial(50)).toEqual(3.0414093201713376e+64);
  });

  it("should return factorial of 100", () => {
    expect(factorial(100)).toEqual(9.33262154439441e+157);
  });
});
