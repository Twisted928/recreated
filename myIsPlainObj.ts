/**
 * plain object 无格式对象(普通对象),通过对象字面量或者new Object()创建的对象
 * @author redux
 */

function myIsPlainObj(obj: any): boolean {
  if (obj === null || obj === undefined || typeof obj !== "object") {
    return false;
  }

  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  // 判断obj的prototype是否为Object
  return Object.getPrototypeOf(obj) === proto;
}
