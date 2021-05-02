// add whatever parameters you deem necessary

function isSubsequence(str1, str2) {
    if (!str1 || !str2) {return false};
    let left = 0;
    let right = str1.length -1;
    let str2Left = 0;
    let str2Right = str2.length -1;
    console.log(str1)
    while (str2Left <= str2Right) {
        if (str2[str2Left] === str1[left] && str2[str2Right] === str1[right]) {
            console.log('hmm', left, right)
            if (left === right || left === right-1) {
                console.log('done');
                return true;
            }
            console.log(str2[str2Left], str1[left], str2[str2Right], str1[right])
            left++;
            right--;
            str2Left++;
            str2Right--;
        } else if (str2[str2Left] !== str1[left]) {
            console.log(str2Left, left)
            str2Left++;
        } else if (str2[str2Right] !== str1[right]) {
            console.log(str2Right, right)
            str2Right--;
        }
    }
    console.log('nope')
    return false;
}

module.exports = isSubsequence;