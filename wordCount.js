
export const countWords = (text) => {
  let standardizedSring = text.trim().toLowerCase();

  standardizedSring.replace(/[^\w\s]|_/g, "");

  let wordArray = standardizedSring.split(/\W+/gim);

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i + 1] !== undefined && wordArray[i + 1] === "t") {
      wordArray[i] = `${wordArray[i]}'${wordArray[i + 1]}`;
      wordArray.splice(i + 1, 1);
    }
  }

  let countedWords = {};
  for (let x = 0; x < wordArray.length; x++) {
    let count = 0;

    for (let y = 0; y < wordArray.length; y++) {
      if (wordArray[x] === wordArray[y]) {
 
        count += 1;
      }
      let currentWord = wordArray[x];
      if (currentWord !== "") {
        countedWords[currentWord] = count;
      }
    }
  }
  return countedWords;
};
