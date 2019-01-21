const print = (...args) => console.log(`Passed arguments ${args}`)

/* setTimeout inside starts work after setTimeout out finishs to work
   after 5s first print will be executed and second setTimeout starts
   to countdown to execute his function inside(second print);
   They start their countdown not at the same time!  
*/
setTimeout(() => {
  print(1, 2, 3);
  setTimeout(() => {
    print(4, 5, 6);
  }, 10000);
}, 5000);