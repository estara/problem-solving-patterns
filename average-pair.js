// add whatever parameters you deem necessary
function averagePair(arr, target) {
    if (!arr) {return false};
    let i = 0
    let j = arr.length-1;
    while (i < j) {
        const num = (arr[i] + arr[j]) / 2;
        if (num === target) {
            return true
        } else if (num > target) {
            j--;
        } else {
            i++;
        }
    }
    return false
}
