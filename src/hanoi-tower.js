const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const obj = {};
  obj.turns = Math.pow(2, disksNumber) - 1;
  /* hour => 60 minutes => 3600 seconds */
  obj.seconds = Math.floor((obj.turns * 3600) / turnsSpeed);
  return obj;
};
