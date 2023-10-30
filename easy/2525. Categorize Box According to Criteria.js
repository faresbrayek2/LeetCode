/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  detector = 0;
  if (mass >= 100) {
    detector = detector + 1;
  }
  volume = length * height * width;
  console.log(10 ** 4);
  if (
    volume >= 10 ** 9 ||
    length >= 10 ** 4 ||
    height >= 10 ** 4 ||
    width >= 10 ** 4
  ) {
    detector = detector + 2;
  }
  if (detector == 0) {
    return "Neither";
  } else if (detector == 3) {
    return "Both";
  } else if (detector == 1) {
    return "Heavy";
  } else {
    return "Bulky";
  }
};
