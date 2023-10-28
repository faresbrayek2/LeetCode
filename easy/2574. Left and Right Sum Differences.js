/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  end = nums.length - 2;
  LeftSum = [0];
  for (let i = 0; i <= end; i++) {
    LeftSum[i + 1] = nums[i] + LeftSum[i];
  }
  RightSum = [0];
  for (let i = 0; i <= end; i++) {
    RightSum.unshift(nums[nums.length - (i + 1)] + RightSum[0]);
  }
  let arr = [];

  for (let i = 0; i <= nums.length - 1; i++) {
    if (LeftSum[i] > RightSum[i]) {
      arr[i] = LeftSum[i] - RightSum[i];
    } else {
      arr[i] = RightSum[i] - LeftSum[i];
    }
  }
  return arr;
};
