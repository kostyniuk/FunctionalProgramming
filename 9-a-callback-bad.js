const fn = (data, callback) => {
  if (!data) {
    callback(new Error('Parametr needed'));
    return;
  }
  callback(null, `Data: ${data}`);
  return data;
}

const callback = (err, data) => {
  if (err) throw err;
  console.log(data);
}

const example = fn('Marcus', callback);

console.log(example);