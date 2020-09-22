const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
  }

  encrypt(message, key) {
    if (message !== undefined && key !== undefined) {
      const reg = /[a-zA-Z]/;
      let count = 0,
        lowerM = message.toLowerCase(),
        lowerK = key.toLowerCase(),
        arr = [];
      for (let i = 0; i < message.length; i++) {
        if (reg.test(message[i])) {
          let code = lowerK.charCodeAt(count);
          arr.push(
            String.fromCharCode(
              ((lowerM.charCodeAt(i) - 97 + (code - 97)) % 26) + 97
            )
          );
          count++;
          if (count === key.length) {
            count = 0;
          }
        } else arr.push(message[i]);
      }
      return this.value === false
        ? arr.reverse().join("").toUpperCase()
        : arr.join("").toUpperCase();
    }
    throw new Error("Woops");
  }
  decrypt(message, key) {
    if (message !== undefined && key !== undefined) {
      const reg = /[a-zA-Z]/;
      let count = 0,
        lowerM = message.toLowerCase(),
        lowerK = key.toLowerCase(),
        arr = [];
      for (var i = 0; i < message.length; i++) {
        if (reg.test(message[i])) {
          let code = lowerK.charCodeAt(count);
          arr.push(
            String.fromCharCode(
              ((lowerM.charCodeAt(i) - 97 - (code - 97) + 26) % 26) + 97
            )
          );
          count++;
          if (count === key.length) {
            count = 0;
          }
        } else arr.push(message[i]);
      }

      return this.value === false
        ? arr.reverse().join("").toUpperCase()
        : arr.join("").toUpperCase();
    }
    throw new Error("woops");
  }
}

module.exports = VigenereCipheringMachine;

// const encrypt = (message, key) => {
//   const reg = /[a-zA-Z]/;
//   let count = 0,
//     lowerM = message.toLowerCase(),
//     lowerK = key.toLowerCase();
//   arr = [];
//   for (let i = 0; i < message.length; i++) {
//     if (reg.test(message[i])) {
//       let code = lowerK.charCodeAt(count);
//       arr.push(
//         String.fromCharCode(
//           ((lowerM.charCodeAt(i) - 97 + (code - 97)) % 26) + 97
//         )
//       );
//       count++;
//       if (count === key.length) {
//         count = 0;
//       }
//     } else arr.push(message[i]);
//   }
//   return arr.join("").toUpperCase();
// };

// const decrypt = (message, key) => {
//   const reg = /[a-zA-Z]/;
//   let count = 0,
//     lowerM = message.toLowerCase(),
//     lowerK = key.toLowerCase(),
//     arr = [];
//   for (var i = 0; i < message.length; i++) {
//     if (reg.test(message[i])) {
//       let code = lowerK.charCodeAt(count);
//       arr.push(
//         String.fromCharCode(
//           ((lowerM.charCodeAt(i) - 97 - (code - 97) + 26) % 26) + 97
//         )
//       );
//       count++;
//       if (count === key.length) {
//         count = 0;
//       }
//     } else arr.push(message[i]);
//   }

//   return arr.join("").toUpperCase();
// };

// console.log(decrypt("UWJJW XAGWLNFM VNNNDXHVWWL :)", "js"));
// console.log(encrypt("Example of sequence: 1, 2, 3, 4.", "lilkey"));
