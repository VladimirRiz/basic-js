const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let str = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        str.push(members[i].trim().charAt(0).toUpperCase());
      }
    }
    return str.sort().join("");
  }
  return false;
};
