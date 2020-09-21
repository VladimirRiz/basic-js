const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, numbers = []) {
    numbers.push(count);
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        this.calculateDepth(el, count + 1, numbers);
      }
    });
    return Math.max(...numbers);
  }
};

const f = (arr, count = 1, n = []) => {
  n.push(count);
  arr.forEach((el) => {
    console.log(el, count);
    if (Array.isArray(el)) {
      return f(el, count + 1, n);
    }
  });
  return Math.max(...n);
};
// console.log(f([[[]]]));
