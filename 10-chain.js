// Chaining. Uses closure.
const sum = a => b => c => a + b + c;

// USAGE

console.log(sum(1)(2)(3));