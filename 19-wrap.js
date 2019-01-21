/* Function wrap that wraps the function, wrapper is lambda that get argumnets from the call and return final result. I created 3 methods for wrapper function. Method cancel off the function and return wrapper. Method timer has parametr msec(miliseconds) after this time expires our function being canceled. Method limit has parametr quantity that show how much times function could be executed before function becomes canceled. Every method returns wrapper so we can use chaining. 
*/
const wrap = fn => {
  let limit = 0;
  let counter = 0;
  let switcher = fn;
  const wrapper = (...args) => {
    if (limit && counter === limit) wrapper.cancel();
    if (fn) {
      const res = fn(...args);
      counter++;
      return res;
    }
  }

  wrapper.cancel = () => {
    fn = null;
    return wrapper;
  };

  wrapper.activate = () => {
    fn = switcher;
  };

  wrapper.timer = (msec) => {
    setTimeout(() => {
      wrapper.cancel();
    }, msec);
    return wrapper;
  };

  wrapper.limit = quantity => {
    limit = quantity;
    return wrapper;
  };

  return wrapper;
};

// test function
const print = (...args) => console.log(`Arguments : ${args}`);

// USAGE

const f1 = wrap(print).limit(4);
const f2 = wrap(print).timer(1000)

setInterval(() => {
  f1('The Alchemist'); // two times
  f1('Paulo Coelho');
  f1.cancel();
  f1('Time is valuable'); // skips
  f1.activate();
  f1('Do not waste it'); // works

  f2('f2\'s first argument'); // two times because function executes every 400ms and have limit 1000ms. So, only two times function is executed. 
  f2('f2\'s second argument'); // two times because function executes every 400ms and have limit 1000ms. So, only two times function is executed.
  f2('f2\'s third argument'); // two times because function executes every 400ms and have limit 1000ms. So, only two times function is executed.
  f2('f2\'s fourth argument'); // two times because function executes every 400ms and have limit 1000ms. So, only two times function is executed.

}, 400);