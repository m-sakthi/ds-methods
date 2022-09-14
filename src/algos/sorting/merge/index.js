// Merge sort uses divide and conquer method where
// we divide the list into two until it is down to single element
// and smaller list is sorted and merged back.
// 
// Time Complexity - θ(n log(n))
// Space Complexity - O(n)
//
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

module.exports = function sort(arr) {
  if (arr.length <= 1) return arr;

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(sort(left), sort(right));
}