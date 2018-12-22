// A listener is a type of callback, but listener we use not only once as a callback.

const fn = (arr, listener) => {
  let counter = 0;
  setInterval(() => {
    listener(arr[counter++])
    if (counter >= arr.length) counter = 0;
  }, 1000);
}

const print = (city) => console.log(`Next city is ${city}`);

const cities = ['Kiev', 'Stockholm', 'Warsaw', 'London'];

fn(cities, print);