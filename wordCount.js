let text = "car: carpet as java: javascript!!&@$%^&";

function countWords(text) {
  let textWithoutPunctuation = text.replace(/[^a-zA-Z0-9 \n\r+]/gim, "");
  let wordArray = textWithoutPunctuation.match(/\b\w+\b/gim);

  return getWordCount(wordArray);
}

function getWordCount(wordArray) {
  let countedWords = [];
  for (let x = 0; x < wordArray.length; x++) {
    let count = 0;
    for (let y = 0; y < wordArray.length; y++) {
      if (wordArray[x] === wordArray[y]) {
        count += 1;
      }
    }
    countedWords.push(wordArray[x] + ":" + count);
  }

  let wordCountArrayNoDuplicates = countedWords.filter((c, index) => {
    return countedWords.indexOf(c) === index;
  });

  return wordCountArrayNoDuplicates;
}

console.log(countWords(text));
