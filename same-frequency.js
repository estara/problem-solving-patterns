// add whatever parameters you deem necessary
function createFrequencyCounter(num) {
    let frequencies = {};
  
    for (let val of num) {
      let valCount = frequencies[val] || 0;
      frequencies[val] = valCount + 1;
    }
  
    return frequencies;
}

function sameFrequency(num1, num2) {
    if (num1.length !== num2.length) return false;

    let num1Freqs = createFrequencyCounter(String(num1));
    let num2Freqs = createFrequencyCounter(String(num2));
  
    for (let key of Object.keys(num1Freqs)) {
      if (num2Freqs[key] === false) {
        return false;
      }
  
      if (num2Freqs[key] !== num1Freqs[key]) {
        return false;
      }
    }
  
    return true;
}
