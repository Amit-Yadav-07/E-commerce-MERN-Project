function countWords(text) {
    // Split the text into an array of words.
    const words = text.split(" ");
  
    // Return the length of the array.
    return words.length;
  }

module.exports = {countWords}