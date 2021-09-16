function myNew() {
  const temp = Object.create(null);
  const constructorTemp = Array.prototype.shift.call(arguments);
  Object.setPrototypeOf(temp, constructorTemp.prototype);
  const res = constructorTemp.apply(temp, arguments);
  return typeof res === Object ? res || temp : temp;
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
