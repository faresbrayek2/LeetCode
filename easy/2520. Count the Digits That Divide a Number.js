/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let myFunc = (nums) => Number(nums);
  var intArr = Array.from(String(num), myFunc);
  console.log(intArr);
  solution = 0;
  for (i = 0; i <= intArr.length; i++) {
    if (num % intArr[i] == 0) {
      solution = solution + 1;
    }
  }
  return solution;
};
