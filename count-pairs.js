// add whatever parameters you deem necessary
function merge(arr1, arr2) {
  let result = [];
  let arr1Idx = 0;
  let arr2Idx = 0;
  while (arr1Idx <= arr1.length-1 && arr2Idx <= arr2.length-1){
      if (arr1[arr1Idx] <= arr2[arr2Idx]) {
          result.push(arr1[arr1Idx]);
          arr1Idx += 1;
      } else {
          result.push(arr2[arr2Idx]);
          arr2Idx += 1;
      }
  }
  while (arr1Idx <= arr1.length-1) {
      result.push(arr1[arr1Idx]);
      arr1Idx += 1;
  }
  while (arr2Idx <= arr2.length-1) {
      result.push(arr2[arr2Idx]);
      arr2Idx += 1;
  }
  return result;
}

function mergeSort(arr) {
  const idx = Math.floor(arr.length / 2);

  if (arr.length < 2) {
      return arr
  }
  const left = arr.splice(0, idx);
  return merge(mergeSort(left), mergeSort(arr))
  
}


function countPairs(arr, num) {
  const sorted = mergeSort(arr);
    let left = 0;
    let right = sorted.length - 1;
    let count = 0;
  
    while (right > left) {
      if ((sorted[left] + sorted[right]) < num) {
        left++;
      } else if ((sorted[left] + sorted[right]) > num){
        right--;
      } else if ((sorted[left] + sorted[right]) === num){
        count++;
        right--;
        left++;
      }
    }
    return count;
}

module.exports = countPairs;
