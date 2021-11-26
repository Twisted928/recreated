const myTimer = (fn, wait, times) => {
  let timer = null;
  const startTime = new Date();
  const totalTimes = times || Infinity;
  let usedTimes = 0;

  if (usedTimes < totalTimes) {
    (function counter(fn, wait) {
      const offset = Date.now() - (startTime + usedTimes * wait);
      const nextTime = wait - offset;
      timer = setTimeout(() => {
        fn();
        if (++usedTimes < totalTimes) {
          usedTimes += 1;
          counter(fn, wait);
        }
      }, nextTime);
    })(fn, wait);
  }
};
