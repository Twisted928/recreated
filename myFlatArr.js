/**
 *
 * @author Twisted
 */

const myFlat = (arr, length) => {
  let res = [];
  (function flat(arr, length) {
    arr.forEach((element) => {
      if (Array.isArray(element) && length > 0) {
        flat(element, length - 1);
      } else {
        res.push(element);
      }
    });
  })(arr, length);
  return res;
};

const myFlatInfinty = (arr) => {
  const stack = [...arr];
  const res = [];
  while (stack.length > 0) {
    const nextItem = stack.pop();
    if (Array.isArray(nextItem)) {
      stack.push(...nextItem);
    } else {
      res.push(nextItem);
    }
  }
  return res.reverse();
};

function* flatten(array) {
  for (const item of array) {
    if (Array.isArray(item)) {
      yield* flatten(item);
    } else {
      yield item;
    }
  }
}

const testArr = [1, 2, [3, 4, [5, 6, 7]]];

const res = myFlatInfinty(testArr);
