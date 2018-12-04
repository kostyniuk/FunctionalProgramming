// Callback realization

// A function that require data and a callback function
// If we acquired data, callback will acquire null as
// parametr for err argument and data as data argument
// If we haven't acquired data, callback will acquire only
// err parametr

const fn = (data, callback) => {
  if (!data) {
    callback(new Error('Parameter needed'));
    return;
  } else {
    callback(null, `Data: ${data}`);
    return 'Value';
  }
}

const res = fn('300', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// It'll be something that we put in the return
console.log({ res });