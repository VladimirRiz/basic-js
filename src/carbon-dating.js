const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string") {
    let num = parseFloat(sampleActivity);
    if (num > 0 && num <= MODERN_ACTIVITY) {
      const k = 0.693 / HALF_LIFE_PERIOD;
      const t = Math.log(MODERN_ACTIVITY / Number(num)) / k;
      return Math.ceil(t);
    }
  }
  return false;
};
