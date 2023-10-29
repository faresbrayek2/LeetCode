/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  numshalflength = Math.round(nums.length / 2);
  count = nums.length - 1;
  solution = 0;
  if (`${nums.length / 2}`.includes(".5")) {
    for (i = 0; i <= numshalflength - 2; i++) {
      const numbersAsString = `${nums[i]}${nums[count]}`;
      solution = solution + parseFloat(numbersAsString);
      count = count - 1;
    }
    return solution + nums[numshalflength - 1];
  } else {
    for (i = 0; i <= numshalflength - 1; i++) {
      const numbersAsString = `${nums[i]}${nums[count]}`;
      solution = solution + parseFloat(numbersAsString);
      count = count - 1;
    }
    return solution;
  }
};
