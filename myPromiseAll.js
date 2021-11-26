/**
 *
 * @author Twisted
 */

function myPromiseAll(params) {
  if (Array.isArray(params) && params.length === 0) {
    return new Promise.resolve([]);
  }

  if (
    !Object.prototype.toString.call(params) === "[object Array]" ||
    typeof params !== "object"
  ) {
    return new Promise.reject({});
  }

  let result = new Array(params.length);
  let resolveCount = 0;
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < params.length; i++) {
      const element = params[i];
      if (
        element !== null &&
        element.then &&
        typeof element === "object" &&
        typeof element.then === "function"
      ) {
        element
          .then((res) => {
            resolveCount += 1;
            result[i] = res;
            if (resolveCount === params.length) {
              resolve(result);
            }
          })
          .catch((err) => {
            reject(err);
            return;
          });
      } else {
        resolveCount += 1;
        result[i] = element;
        if (resolveCount === params.length) {
          resolve(result);
        }
      }
    }
  });
}

// ----------------------------test---------------------------------------------

const promise1 = new Promise(function (resolve) {
  resolve(1);
});
const promise2 = new Promise(function (resolve) {
  resolve(2);
});
const promise3 = new Promise(function (resolve, reject) {
  resolve(3);
});

const promiseAll = myPromiseAll([promise1, promise2, promise3, { a: "1" }]);

promiseAll.then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log("err", err);
  }
);
