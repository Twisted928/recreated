function myIsPlainObj(obj: any): boolean {
  if (
    !obj ||
    typeof obj !== "object" ||
    {}.toString.call(obj) !== "[object Object]"
  ) {
    return false;
  }

  const protoTemp = Object.getPrototypeOf(obj);

  if (protoTemp === null) {
    return true; // 字面量创建:{} or Object.create()
  }

  const Ctor =
    protoTemp.constructor && {}.hasOwnProperty.call(protoTemp, "constructor");
  return (
    typeof Ctor === "function" &&
    Ctor instanceof Ctor &&
    Function.prototype.toString.call(Ctor) ===
      Function.prototype.toString.call(Object)
  );
}
