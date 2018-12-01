const log = (base, n) => Math.log(n) / Math.log(base);

const createLog = base => n => log(base, n);

const lg = createLog(10);
const ln = createLog(Math.E);

console.log(`lg(10) = ${lg(10)}`);
console.log(`ln(10) = ${ln(10)}`);