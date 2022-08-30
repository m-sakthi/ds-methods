// Generate a fibonacci for given n 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// Ref: https://www.mathsisfun.com/numbers/fibonacci-sequence.html
// 
// Using Recursion
// 
function fibonacci(n, computed={ 0: 0, 1: 1 }) {
  if (n <= 1) return n;
  else {
    computed[n] ||= fibonacci(n - 1, computed) + fibonacci(n - 2, computed);
    return computed[n];
  }
};

// Using Iteration
// 
// function fibonacci(n) {
//   const arr = [0, 1];

//   for(i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }

//   return arr[n];
// }

module.exports = fibonacci;