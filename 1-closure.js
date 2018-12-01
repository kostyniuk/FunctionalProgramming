// A function that require two arguments: base of logarithm and a number x
// Returns logarithm with specified base and number
const log = (base, n) => Math.log(n) / Math.log(base);

// A function that require base argument
// Returns another function which require only number and returns result of log()
const createLog = base => n => log(base, n);

// lg logarithm
const lg = createLog(10);

// ln logarithm
const ln = createLog(Math.E);

// RESULTS
console.log(`lg(10) = ${lg(10)}`);
console.log(`ln(10) = ${ln(10)}`);