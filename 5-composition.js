// Realization of compostion of two functions
const compose = (f1, f2) => x => f2(f1(x));

// Convertion strings method toLowerCase() to a function
// that can be composed. We applied this because we can't
// compose methods, only functions.
const lower = s => s.toLowerCase();

// Make first letter of a string uppercased
const capitilize = s => s.charAt(0).toUpperCase() + s.slice(1);

// Make all the first letters of a word in a string uppercased
const capitilizeAll = s =>
  s.split(" ").map(capitilize).join(" ");

// USAGE

const capitalization = compose(lower, capitilizeAll);

const example = 'Just a simple sentence, it dOesn\'t have ANY sence.';

console.log('Example : ' + example);
console.log('Manually: ' + capitilizeAll(lower(example)));
console.log('Compose: ' + capitalization(example));
