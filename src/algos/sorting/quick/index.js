// Quick Sort uses divide and conquer method
// where a list is seperated by a pivot point and sorted in such a way that
// all the elements in before the pivot point are smaller
// and after that are larger.
// 
// Time complexity - O(n log(n))
// Space complexity - O(n)
//
function swap(arr, firstIndex, secondIndex) {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

function partition(arr, low, high) {
  const pivotValue = arr[high];
  let partitionIndex = low;

  for(let i = low; i < high; i++) {
    if(arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, high, partitionIndex);
  return partitionIndex;
}

module.exports = function sort(arr, low, high) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);

    sort(arr, low, partitionIndex - 1);
    sort(arr, partitionIndex + 1, high);
  }

  return arr;
}
