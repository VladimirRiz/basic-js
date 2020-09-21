const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = "") {
    let str = `( ${value} )`;
    this.arr.push(str);
    return this;
  },
  removeLink(position) {
    if ((position ^ 0) === position && this.arr[position - 1] !== undefined) {
      this.arr.splice(position - 1, 1);
      return this;
    }
    this.arr = [];
    throw new Error("Error");
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join("~~");
    this.arr = [];
    return str;
  },
};
module.exports = chainMaker;
