/**
 *
 * 如果你持续触发事件，每隔一段时间，只执行一次事件。
 * @author Twisted
 */
export function myThrottle(func, wait) {
  console.log("init");
  let timer;
  let timeBefore = 0;
  return function () {
    let _this;
    let args;
    const timeNow = +new Date();
    const resTime = wait - (timeNow - timeBefore);

    if (resTime <= 0 || resTime > wait) {
      if (timer) {
        console.log("hasTimer");
        clearTimeout(timer);
        timer = null;
      }
      timeBefore = timeNow;
      func.apply(_this, args);
    } else if (!timer) {
      timer = setTimeout(function () {
        timeBefore = +new Date();
        func.apply(_this, args);
        timer = null;
      }, resTime);
    }
  };
}
