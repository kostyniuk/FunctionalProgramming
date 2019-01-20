// Compose realization via recursion.
// It gets functions and returns another function that 
// require arguments and returns result of composition.
// Firstly we check if we acquire any function, then
// if so we shift our array of functions and execute 
// this function with the parametrs that previous 
// function returned (in a very first iteration we use 
// the parametrs that user gave us with call).
// If no functions were acquired we just return the arguments.

const compose = (...fns) => (...args) => {
  if (fns.length === 0) return args;
  const tempFunc = fns.shift();
  const res = tempFunc(...args);
  if (fns.length === 0) return res;
  return compose(...fns)(res)
}

const trim = s => s.trim();

const lower = s => s.toLowerCase();

const upper = s => s.charAt(0).toUpperCase() + s.slice(1);

// Applying upper() to every element in array(every word)
const upperAll = s => s.split(' ').map(upper).join(' ');

// USAGE  

const mixedFunction = compose(trim, lower, upperAll);

// Testing with no parametrs.
//const mixedFunction = compose();

const s = '   JaHsEH ONfROY   ';

console.log(`lower(${s}) = ${lower(s)}`);
console.log(`upperAll(${s}) = ${upperAll(s)}`);
console.log(`trim(${s}) = ${trim(s)}`);

console.log(`Result: ${mixedFunction(s)}`);