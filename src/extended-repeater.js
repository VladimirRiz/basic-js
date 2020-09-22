const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str !== undefined ? String(str) : "";
  options.addition =
    options.addition !== undefined ? String(options.addition) : "";

  options.separator = options.separator ? options.separator : "+";
  options.additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  options.additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;

  let line = "";
  let arr = [];

  for (let i = 0; i < options.repeatTimes; i++) {
    line += `${str}`;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (options.additionRepeatTimes > 0) {
        line += `${options.addition}${options.additionSeparator}`;
      } else line += `${options.addition}`;
    }
    line += "/";
  }
  let divide = line.split("/");
  divide.pop();

  for (e of divide) {
    if (options.additionRepeatTimes > 0) {
      arr.push(e.slice(0, -`${options.additionSeparator.length}`));
    } else arr.push(e);
  }
  return arr.join(options.separator);
};

const repeater = (str, options) => {
  str = str !== undefined ? String(str) : "";
  options.addition =
    options.addition !== undefined ? String(options.addition) : "";

  options.separator = options.separator ? options.separator : "+";
  options.additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  options.additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;

  console.log(options.repeatTimes);

  let line = "";
  let arr = [];

  for (let i = 0; i < options.repeatTimes; i++) {
    line += `${str}`;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (options.additionRepeatTimes > 0) {
        line += `${options.addition}${options.additionSeparator}`;
      } else line += `${options.addition}`;
    }
    line += "/";
  }
  let divide = line.split("/");
  console.log(divide);
  divide.pop();

  for (e of divide) {
    if (options.additionRepeatTimes > 0) {
      arr.push(e.slice(0, -`${options.additionSeparator.length}`));
    } else arr.push(e);
  }
  return arr.join(options.separator);
};
