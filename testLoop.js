console.log("script start");

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 mid");
  await async3();
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

async function async3() {
  console.log("async3");
}

function async4() {
  console.log("async4");
}

async1();

new Promise((resolve, reject) => {
  console.log("promise init");
  resolve();
}).then(() => {
  console.log("then");
});

setTimeout(() => {
  console.log("timeout");
});

console.log("script end");
