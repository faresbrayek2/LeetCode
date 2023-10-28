/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  grid.forEach((row) => row.sort((a, b) => a - b));
  let sum = 0;

  while (grid[0].length) {
    let arr = [];
    for (let row of grid) {
      arr.push(row.pop());
    }
    sum += Math.max(...arr);
  }
  return sum;
};
