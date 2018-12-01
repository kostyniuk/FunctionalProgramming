const log = (base, n) => Math.log(base) / Math.log(n);

const ln = log.bind(Math.E);
const lg = log.bind(10);

console.log(`lg(5) = ${lg(5)}`);
console.log(`ln(5) = ${ln(5)}`);