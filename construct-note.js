// add whatever parameters you deem necessary
function createFrequencyCounter(str) {
    let frequencies = {};
  
    for (let letter of str) {
      let valCount = frequencies[letter] || 0;
      frequencies[letter] = valCount + 1;
    }
  
    return frequencies;
}

function constructNote(message, letters) {
  if (letters === "") {return false};
  let messageFreqs = createFrequencyCounter(message);
  let lettersFreqs = createFrequencyCounter(letters);

  for (let key of Object.keys(messageFreqs)) {
    if (lettersFreqs[key] === false) {
      return false;
    }

    if (lettersFreqs[key] < messageFreqs[key]) {
      return false;
    }
  }

  return true;
}