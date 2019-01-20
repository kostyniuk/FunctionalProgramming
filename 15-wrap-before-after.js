// Wrap realization
const wrap = (before, after, fn) => (...args) => after(...fn(...before(...args)));

// Usage

const func = (...args) => {
  console.dir(args);
  return args;
};

const before = (...args) => {
  console.log('before');
  console.log(args);
  argsNew = args.filter((item) => item > 25);
  console.log('A new array is ready')
  return argsNew;
};

const after = (...args) => {
  console.log('after \nSum:');
  console.log(args.reduce((accumulator, currentValue) => accumulator + currentValue));
};

const wrapped = wrap(before, after, func);
wrapped(34, 12, 45, 100, 32, 8, 37, 57, 231, 18);