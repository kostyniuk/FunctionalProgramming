const fs = require('fs');

// ReadFile is a method that asynchronously reads 
// the entire contents of a file. The content of the 
// file is in data from callback function which is required.
// As it works asynchronously, 'end' will be printed out 
// earlier that result of readFile
fs.readFile('./1-closure.js', 'utf-8', (err, data) => {
  console.log(data.split('\n').length);
});

console.log('end'); 