/**
 * plain object 无格式对象(普通对象),通过对象字面量或者new Object()创建的对象
 * 即：判断 obj 的构造函数是不是 Object
 *
 */

function myIsPlainObj(obj) {
  if (
    !obj ||
    typeof obj !== "object" ||
    {}.toString.call(obj) !== "[object Object]" // 排除Array,Date等引用类型
  ) {
    return false;
  }

  // Lodash version
  const proto = Object.getPrototypeOf(obj);
  if (proto === null) {
    return true;
  }

  const ctor = {}.hasOwnProperty.call("constructor") & proto.constructor;
  return (
    typeof ctor === "function" &&
    ctor instanceof ctor &&
    ctor.toString() === Object.toString()
  );

  /**
   *  @author Redux
   *  let proto = Object.getPrototypeOf(obj);
   *  while (Object.getPrototypeOf(proto) !== null) {
   *    proto = Object.getPrototypeOf(obj);
   *  }
   *  return Object.getPrototypeOf(Obj) === Object.getPrototypeOf(proto);
   */
}
