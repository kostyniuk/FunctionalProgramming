/* Function throttling, executed once per interval
   This function uses partial application so arguments
   to the function(second parametr) can be given as third
   argument directly to throttle function.
*/
const throttle = (timeout, fn, ...args) => {
  let timer;
  let wait = false;
  let wrapped = null;

  const throttled = (...par) => {
    timer = undefined;
    if (wait) wrapped(...par);
  };

  wrapped = (...par) => {
    if (!timer) {
      timer = setTimeout(throttled, timeout, ...par);// par goes 
      //directly to the first argument of throttled
      wait = false;
      return fn(...args.concat(par));
    } else {
      wait = true;
    }
  };

  return wrapped;
};

// USAGE

const print = (...args) => console.log(`Passed arguments ${args}`)

const ft = throttle(200, print, 'value1');

const timer = setInterval(() => {
  print('value2');
  ft('value3');// executed not every time but after 200ms
}, 50);

setTimeout(() => {
  clearInterval(timer);
}, 2000);
