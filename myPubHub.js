class PubHub {
  constructor() {
    this.eventTemp = Object.create(null);
  }

  subscribe(name, fn) {
    const item = this.eventTemp[name];
    if (!item) {
      this.eventTemp[name] = [].push(fn);
    } else {
      item.push(fn);
    }
  }

  once(name, fn) {
    function onceFn() {
      this.unSubscribe(name, fn);
      fn.apply(this, arguments);
    }
    this.subscribe(name, onceFn);
  }

  publish(name, ...args) {
    const item = this.eventTemp[name];
    if (item?.length) {
      item.forEach((element) => {
        element.apple(this, args);
      });
    }
  }

  unSubscribe(name, fn) {
    if (this.eventTemp[name]?.length) {
      this.eventTemp[name] = this.eventTemp[name].filter((item) => {
        return item !== fn;
      });
    }
  }
}
