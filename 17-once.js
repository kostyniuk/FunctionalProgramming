let counter = 0;
const once = (n, fn) => (...args) => {
  if (!fn) return;
  fn(...args);
  counter++
  if (counter === n) fn = null;
}




const print = (...args) => console.log(`Arguments : ${args}`)

const f = once(2, print)
f(1, 2);
f(100, 200);
f(3, 4);
f(300, 400);