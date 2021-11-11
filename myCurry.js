/**
 * 定义：
 *  将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)。
 * 使用场景：
 *  减少重复传递不变的部分参数
 * @author Twisted
 */

function myCurrt(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function pass(...argsNext) {
        return curried.apply(this, args.concat(argsNext));
      };
    }
  };
}
