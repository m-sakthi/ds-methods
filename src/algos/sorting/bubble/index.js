// Bubble Sort is the simplest sorting algorithm that works by repeatedly
// swapping the adjacent elements if they are in the wrong order.
// 
// Time complexity - O(n2)
// Space complexity = O(1)
// 
module.exports = function sort(arr) {
  for(i = 0; i < arr.length; i++) {
    for(j = i + 1; j < arr.length; j++ ) {
      if(arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp; 
      }
    }
  }

  return arr;
}