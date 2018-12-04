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

console.log({ res });