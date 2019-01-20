// reducer for getting sum of array
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// sum function using reduce()
const sum = (...args) => args.reduce(reducer, 0);

// partial function which can get different amount of arguments
// require function that will be excecuted and arguments
// return another function that require arguments and that 
// excexutes function with all given arguments 
const partial = (func, ...args) => (...rest) => func(...args.concat(rest));

// usage
const f1 = partial(sum, 2, 3);
const f2 = partial(f1, 4, 5);
const f3 = partial(f2, 6, 7);
const result = f3(8, 9);

console.log({ result });
