const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((total, el, i) => {
      switch (el) {
        case "--discard-next":
        case "--discard-prev":
        case "--double-next":
        case "--double-prev":
          return total;
      }

      if (arr[i - 1] === "--discard-next") {
        return total;
      }

      arr[i - 1] === "--double-next" ? total.push(el, el) : total.push(el);

      switch (arr[i + 1]) {
        case "--double-prev":
          total.push(el);
          break;
        case "--discard-prev":
          total.splice(total.length - 1, 1);
          break;
      }

      return total;
    }, []);
  }
  throw new Error();
};

let arr = [1, 2, 3, "--double-prev", 2, 3, 4, 5];
let nArr = arr.reduce((total, el, i) => {
  switch (el) {
    case "--discard-next":
    case "--discard-prev":
    case "--double-next":
    case "--double-prev":
      return total;
  }

  if (arr[i - 1] === "--discard-next") {
    return total;
  }

  arr[i - 1] === "--double-next" ? total.push(el, el) : total.push(el);

  switch (arr[i + 1]) {
    case "--double-prev":
      total.push(el);
      break;
    case "--discard-prev":
      total.splice(total.length - 1, 1);
      break;
  }

  return total;
}, []);

// console.log(nArr);
