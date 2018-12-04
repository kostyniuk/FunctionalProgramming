// Compose reealization via for() loop.
// It gets functions and returns another function that 
// require arguments and returns result of composition.
// Firstly we check if we acquire more then 1 function, 
// if it's we in loop apply every function with 
// the parametr that previous function returned.
// Function starts with 1 because function[0] already 
// excecuted. If we get only one parametr in our main
// function, we just execute it with acquired parametrs. 
const compose = (...fns) => (...args) => {
  if (fns.length > 1) {
    let res = fns[0](...args);
    for (let i = 1; i < fns.length; i++) {
      res = fns[i](res);
    }
    return res;
  } else return fns[0](...args)
};

const trim = s => s.trim();

const lower = s => s.toLowerCase();

const upper = s => s.charAt(0).toUpperCase() + s.slice(1);

// Applying upper() to every element in array(every word)
const upperAll = s => s.split(' ').map(upper).join(' ');

// USAGE  

const mixedFunction = compose(trim, lower, upperAll);

const s = '   JaHsEH ONfROY   ';

console.log(`lower(${s}) = ${lower(s)}`);
console.log(`upperAll(${s}) = ${upperAll(s)}`);
console.log(`trim(${s}) = ${trim(s)}`);

console.log(`Result: ${mixedFunction(s)}`);