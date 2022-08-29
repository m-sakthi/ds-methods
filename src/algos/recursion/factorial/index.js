// For a given n calculate n!
// n! = n * (n - 1) * (n - 2) * ... * (n - n + 1) * 0!
// 
function factorial(n) {
  if (n <= 1) return 1;
  else return n * factorial(n - 1);
};

module.exports = factorial;