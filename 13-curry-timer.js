// Recursive curry realization
const curry = fn => (...args) => {
  if (fn.length > args.length) {
    const f = fn.bind(null, ...args);
    return curry(f);
  } else {
    return fn(...args);
  }
};

const print = () => console.log('The function is excecuted');

// Swap of argumnets. Therefore, all functions have the same contract.
const timer = curry((fn, time) => setTimeout(time, fn));

// USAGE of curry
const timer5s = timer(5000);
timer5s(print);