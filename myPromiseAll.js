function myAll(params) {
  if (params === []) {
    return new Promise.resolve([]);
  }

  if (
    !Object.prototype.toString.call(params) === "[object Array]" ||
    typeof params !== "object"
  ) {
    return new Promise.reject({});
  }

  let result = [];
  let resolveCount = 0;
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < params.length; i++) {
      const element = params[i];
      if (
        element.then &&
        typeof element === "object" &&
        typeof element.then === "function"
      ) {
        element.then(
          (res) => {
            resolveCount += 1;
            result[i] = res;
            if (resolveCount === params.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
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

const promise1 = new Promise(function (resolve, reject) {
  resolve(1);
});
const promise2 = new Promise(function (resolve) {
  resolve(2);
});
const promise3 = new Promise(function (resolve) {
  resolve(3);
});

const promiseAll = myAll(1);
// const promiseAll = myAll([promise1, promise2, promise3, 4]);

promiseAll.then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log("err", err);
  }
);
