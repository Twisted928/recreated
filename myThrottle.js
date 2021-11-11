/**
 * 如果持续触发事件，每隔一段时间，只执行一次事件。
 * @author Twisted
 */
export function myThrottle(func, wait) {
  let lastTime = null;
  let timer = null;
  let nowTime = +new Date(); // JS中在元素前使用'+'号将该元素转换成Number类型，如果转换失败，得到NaN
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  const remainTime = wait - (nowTime - lastTime);

  if (remainTime <= 0) {
    lastTime = nowTime;
    func.apply(this, arguments);
  } else {
    timer = setTimeout(() => {
      lastTime = +new Date();
      func.apply(this, arguments);
    }, remainTime);
  }
}
