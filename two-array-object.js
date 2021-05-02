// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let result = {};
    let i = 0;
    for (let key of arr1) {
        if (arr2[i]) {
            result[key] = arr2[i];
        } else {
            result[key] = null;
        }
        i++
    }
    return result;
}
