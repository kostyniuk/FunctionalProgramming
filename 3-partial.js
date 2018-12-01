// reducer for getting sum of array
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// sum function using reduce()
const sum = (...args) => args.reduce(reducer, 0);

// partial function which can get different amount of arguments
// require function that will be excexuted and arguments
// return another function that require argumnets and that 
// excexutes function with all given aeguments 
const partial = (func, ...args) => (...rest) => func(...args.concat(rest));

// usage
const f1 = partial(sum, 2, 3, 4);
const f2 = partial(f1, 5, 6, 7);
const result = f2(8, 9);

console.log({
  result
});