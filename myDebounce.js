/* 防抖的原理就是：你尽管触发事件，
 * 但是一定在事件触发 n 秒后才执行，
 * 如果在一个事件触发的 n 秒内又触发了这个事件，
 * 那就以新的事件的时间为准，n 秒后才执行
 */
function myDebounce(func, wait) {
  let timer;

  if (timer) {
    clearTimeout(timer);
  }
  return function () {
    const _this = this;
    const args = arguments;
    timer = setTimeout(() => {
      console.log("inside");
      func.apply(_this, args);
      clearTimeout(timer);
      timer = null;
    }, wait);
  };
}

// ----------------------------------test------------------------------------------------
