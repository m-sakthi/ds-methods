module.exports = function sort(arr) {
  const len = arr.length;
  for(let i = 0; i < len; i++) {
    // Check if the first element lesser than current element
    if(arr[i] < arr[0]) {
      // Splice removes the element
      // Unshift adds the given element as the first element
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // run the loop only till i which is the selected element
      // only if the selected element is lesser then the current element replace it
      for(let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, (arr.splice(i, 1)[0]));
        }
      }
    }
  }

  return arr;
}