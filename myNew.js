function myNew() {
  const temp = Object.create(null);
  const prototypeTemp = Array.prototype.shift.call(arguments);
  Object.setPrototypeOf(temp, prototypeTemp.prototype);
  const res = prototypeTemp.apply(temp, arguments);
  return typeof res === Object ? res : temp;
}

// --------------------------------------test----------------------------------------------

function Twisted(age, name) {
  this.age = age;
  this.name = name;
}

Twisted.prototype.sayHello = function () {
  console.log(`Hello I am ${this.name}, I am ${this.age}`);
};

const child = myNew(Twisted, "22", "Lc");

console.log(child);
child.sayHello();
