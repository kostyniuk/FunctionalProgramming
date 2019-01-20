// Composition of functions that uses reduce() function.
// It gets functions and returns another function that 
// require arguments and returns result of composition.
// We go through the array of functions and reduce() pick
// them one by one and push every function to second argument
// of lambda inside reduce, first argument is array of what
// returned the previous function, on the first iteration
// the first argument is ...args that we give to our function
// 
// In other languages this realization is called pipe. 
// compose - reverse to pipe.
// pure compose - 15: fns.reverse().reduce  
const compose = (...fns) => (...args) => (
  fns.reduce((args, fn) => [fn(...args)], args)
);

const trim = s => s.trim();

const lower = s => s.toLowerCase();

const upper = s => s.charAt(0).toUpperCase() + s.slice(1);

// Applying upper() to every element in array(every word)
const upperAll = s => s.split(' ').map(upper).join(' ');

// USAGE  

const mixedFunction = compose(trim, lower, upperAll);

const s = '   JAHSEH ONFROY   ';

console.log(`lower(${s}) = ${lower(s)}`);
console.log(`upperAll(${s}) = ${upperAll(s)}`);
console.log(`trim(${s}) = ${trim(s)}`);

console.log(`Result: ${mixedFunction(s)}`);
