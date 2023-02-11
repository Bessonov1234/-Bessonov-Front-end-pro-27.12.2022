// ! # 11

function numExpDigit(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * numExpDigit(x, n - 1);
  }
}

console.log(numExpDigit(2, 10));

console.log(numExpDigit(7, 5));
console.log(numExpDigit(2, 5));


// ! # 12

// function sumOfSquares(num) {
//   function sum(currentSum = 0) {
//     // console.log(n);
//     return console.log(currentSum + num);
//   }
//   // sum(num);
// }

// console.log(sumOfSquares(5));
// sumOfSquares(5);
// sumOfSquares(5);


// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();

// // console.log(makeCounter)

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// console.log(counter())
