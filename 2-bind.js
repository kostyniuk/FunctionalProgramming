// A function that require two arguments: base of logarithm and a number x
// Returns logarithm with specified base and number
const log = (base, n) => Math.log(base) / Math.log(n);

// USAGE OF BIND
// We transform our log function into another in which the first argument is already defined and we can't change it
// New function will require only one argument because another one is already applied
const ln = log.bind(null, Math.E);
const lg = log.bind(null, 10);

// Results
console.log(`lg(5) = ${lg(5)}`);
console.log(`ln(5) = ${ln(5)}`);