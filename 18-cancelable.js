// Wrapper cancelable gives a possibility to off function whenever
// you are up to do it or you want to do it.
// Wrapper is a function that pick up the final arguments. 
const cancelable = (fn) => {
  const wrapper = (...args) => {
    if (fn) fn(...args)
  };
  wrapper.cancel = () => fn = null;
  return wrapper;
};

const upper = s => console.log(s.charAt(0).toUpperCase() + s.slice(1));

const fn = cancelable(upper);
fn('jahseh')
fn('onfroy')
fn.cancel();
fn('xxxtentacion')/* function is canceled before, so this execution                          won't work(Literally, it will, but fn = null)
                  */
