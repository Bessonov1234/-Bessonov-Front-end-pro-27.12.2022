// ! №1
let i = 20;

while (i <= 30) {
  console.log(i);
  i += 0.5;
}

// ! №2

let doll = 27;
let plus = 0;

for (let i = 0; i < 10; i++) {
  plus += 10;
  doll *= plus;
  console.log(doll);
  doll /= plus;
}

// ! №3

let n = +prompt("Введіть ціле число");

for (let i = 1; i <= 100; i++) {
  //   debugger;
  if (i ** 2 <= n) {
    console.log(i);
  } else {
  }
}
// ! №4

for (let number = 2; number <= 30; number++) {
  let isPrime = true;
  for (let i = 2; i <= number - 1; i++) {
    if (number % i === 0) {
      isPrime = false;
      continue;
    }
  }
  if (isPrime) console.log(number);
}
// ! №5

// let num = 81;
// for (let i = 1; 3 ** i <= num; i++) {
//   if (3 ** i !== num) {
//     continue;
//   } else {
//     console.log("The possible num can be: " + 3 ** i);
//   }
// }
