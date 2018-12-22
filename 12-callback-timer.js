const fn = () => console.log(`5 seconds has ended`)

// It's not the typical function with callback inside,
// because callback have to be the last argument of a function

//setTimeout(fn, 5000);

// Updated
const timer = (time, callback) => setTimeout(callback, time);

// USAGE

timer(5000, fn);