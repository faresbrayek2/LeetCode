/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowel = "aeiou";
  return words.reduce((acc, item, index) => {
    if (
      index >= left &&
      index <= right &&
      vowel.includes(item.slice(0, 1)) &&
      vowel.includes(item.slice(item.length - 1, item.length))
    ) {
      acc += 1;
    }
    return acc;
  }, 0);
};
