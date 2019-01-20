// A listener is a type of callback, but listener we use not only once as a callback.

// In this example, the listener is the function print, that we apply every 1s(setInterval). This output is endless because if counter >= 0 we assign it to 0(an array first item)  
const fn = (arr, listener) => {
  let counter = 0;
  setInterval(() => {
    listener(arr[counter++])
    if (counter >= arr.length) counter = 0;
  }, 1000);
}

// USAGE

const print = (city) => console.log(`Next city is ${city}`);

const cities = ['Kiev', 'Stockholm', 'Warsaw', 'London'];

fn(cities, print);