/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  // first we change it to binary
  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }
  // second we change the binary to array
  function NumToString(number) {
    return [...number.toString()].map(Number);
  }
  arr = NumToString(dec2bin(n));
  let solution = [];
  left = 0;
  right = 0;
  arr = arr.reverse();
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == 1) {
      if (i % 2 === 0) {
        right = right + 1;
      } else {
        left = left + 1;
      }
    }
  }
  solution.push(right, left);
  return solution;
};
