function makeCounter() {
  let count = 0;
  return function(num) {
    return console.log(count += num); ;
  };
}

let counter = makeCounter();

// console.log(makeCounter)
counter(3)
counter(5)
counter(20)






