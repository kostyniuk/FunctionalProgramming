// Realization of currying our function gets another function // as the argument and returns function that will check 
// quantity of gotten parametrs if it's enought to fill all // parametrs in first function, our function will be 
// excexuted, else we will bind them in fn parametrs. On 
// every call  we will bind them and if its enough to 
// excexute our function will be excecuted.

const curry = fn => (...args) => {
  if (fn.length > args.length) {
    const f = fn.bind(null, ...args);
    return curry(f);
  } else {
    return fn(...args);
  }
};

// Ordinar function
const sum4 = (a, b, c, d) => (a + b + c + d);

// USAGE

const f = curry(sum4);

const y1 = sum4(1, 2, 3, 4); // 10
const y2 = f(1, 2, 3, 4); // 10
const y3 = f(1, 2, 3)(4); // 10
const y4 = f(1, 2)(3)(4); // 10
const y5 = f(1)(2)(3)(4); // 10
const y6 = f(1)(2, 3, 4); // 10
const y7 = f(1)(2)(3, 4); // 10
const y8 = f(1, 2)(3, 4); // 10

console.log(y1, y2, y3, y4, y5, y6, y7, y8);