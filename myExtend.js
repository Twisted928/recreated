function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function () {
  console.log(this.name);
};

// No.1
function Child1() {}
Child1.prototype = new Parent();
Child1.prototype.constructor = Parent;
const child1 = new Child1();
console.log("No.1", Child1.prototype);

//No.2
function Child2() {
  Parent.call(this, "Child2");
}

Child2.prototype.constructor = Parent;
const child2 = new Child2();

// console.log("No.2", child2.sayName());

//No.3
function Child3() {
  Parent.call(this, "Child3");
}

const prototypeTemp = Object.create(Parent.prototype);
prototypeTemp.constructor = Child3;
Child3.prototype = prototypeTemp;
const child3 = new Child3();

// console.log("No.3", child3.sayName());

console.log("func'sproto", Function);
