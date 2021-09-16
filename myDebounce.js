/**
 * 防抖的原理:
 * 在事件触发 n 秒后才执行，
 * 如果在一个事件触发的 n 秒内又触发了这个事件，
 * 那就以新的事件的时间为准，n 秒后才执行
 * @author Twisted
 */
export function myDebounce(func, wait) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    const _this = this;
    const args = arguments;
    timer = setTimeout(function () {
      func.apply(_this, args);
    }, wait);
  };
}
