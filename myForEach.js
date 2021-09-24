Array.prototype.myForEach = function (fn, thisArg) {
  if (this === null) {
    return;
  }
  if (typeof fn !== "function") {
    throw new TypeError(fn + "is not a function");
  }
  for (var i = 0; i < this.length; i++) {
    fn.call(thisArg, this[i], i, this);
  }
};

// -----------------------------------------------Test--------------------------------------------------------

const arr = ["1", "2", "3"];
const arr2 = ["2", "34", "23"];
arr.myForEach(function (item, index, context) {
  console.log(this, "|", item, "|", index, "|", context);
}, arr2);
