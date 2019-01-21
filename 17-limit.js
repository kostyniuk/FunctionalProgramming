// Function once allows us to execute the passed function only 
// earlier entered amount of times.
const limit = (n, fn) => {
  let counter = 0;
  return (...args) => {
    if (!fn) return;
    fn(...args);
    counter++
    if (counter === n) fn = null;
  }
}

const print = (...args) => console.log(`Arguments : ${args}`);

// USAGE

const once = limit(1, print);
const twice = limit(2, print)

once(1, 2);
once(100, 200); //Won't be executed
twice(3, 4);
twice(300, 400);
twice(3000, 4000); //Won't be executed