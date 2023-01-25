let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// ! 1

let countPositive = 0;
let sumPositive = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    countPositive++;
    sumPositive += arr[i];
  }
}
console.log(
  `Сума ${sumPositive}, кількість позитивних елементів ${countPositive}`
);
//! 3

let maxNumber = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (maxNumber < arr[i]) {
    maxNumber = arr[i];
  }
}
console.log(arr.indexOf(maxNumber));
console.log(maxNumber);


//! 2

let maxNumber2 = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (maxNumber2 > arr[i]) {
    maxNumber2 = arr[i];
  }
}
console.log(arr.indexOf(maxNumber2));
console.log(maxNumber2);


//! 4

let negetiv = [];

for (let i = 0; i < arr.length; ++i) {
  if (arr[i] < 0) {
    negetiv.push(arr[i]);
  }
}
console.log(negetiv.length);

//! 6

let parne = arr.filter((el, index, myarr) => {
  if (el > 0) {
    return myarr.indexOf(el) !== index;
  }
});
let unshift = parne.shift()
console.log(parne);
console.log(parne.length);

// ! 5
let noparne = arr.filter((el) => {
  if (el > 0) {
    return parne.indexOf(el) < 0;
  }
});
// noparne.splice(2, 3);
console.log(noparne);
console.log(noparne.length);

// ! 7
let result = parne.reduce((accumulattor, iteam) => accumulattor + iteam, 0);

console.log(result);

// ! 8

let result1 = noparne.reduce((accumulattor, iteam) => accumulattor + iteam, 0);

console.log(result1);

// ! 9

let multiplying = arr.filter((el) => {
  if (el > 0) return el;
});
console.log(multiplying.length);
console.log(multiplying);

let result2 = multiplying.reduce(
  (accumulattor, iteam) => accumulattor * iteam,
  1
);

console.log(result2);

// ! 10

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
let zero = [];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] != max) {
    zero.push(0);
  } else zero.push(max);
}
console.log(zero);

// let arr = [
//   16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
//   76, -4, 12, -35, 4, 47,
// ];

// console.log("1 Знайти суму та кількість позитивних елементів.");

// let countPositive = 0;
// let sumPositive = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     countPositive++;
//     sumPositive += arr[i];
//   }
// }
// console.log(
//   `Сума ${sumPositive}, кількість позитивних елементів ${countPositive}`
// );

// console.log("2 Знайти мінімальний елемент масиву та його порядковий номер.");
// let minValue = arr[0];
// let indexMin;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < minValue) {
//     minValue = arr[i];
//     indexMin = arr.indexOf(arr[i]) + 1;
//   } else continue;
// }
// console.log(
//   `мінімальний елемент масиву ${minValue}, його порядковий номер ${indexMin}`
// );

// console.log("3 Знайти максимальний елемент масиву та його порядковий номер");
// let maxValue = arr[0];
// let indexMax;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxValue) {
//     maxValue = arr[i];
//     indexMax = arr.indexOf(arr[i]) + 1;
//   } else continue;
// }
// console.log(
//   `максимальний елемент масиву ${maxValue}, його порядковий номер - ${indexMax}`
// );

// console.log("4 Визначити кількість негативних елементів.");

// let countNegative = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     countNegative++;
//   } else continue;
// }
// console.log(`кількість негативних елементів ${countNegative}`);

// console.log("Знайти кількість непарних позитивних елементів");
// let positiveArr = arr.filter((elem) => elem > 0);

// let noPair = positiveArr.filter((item, index) => {
//   return positiveArr.indexOf(item) === index;
// });

// console.log(`кількість непарних позитивних елементів - ${noPair.length}`);

// console.log("Знайти кількість парних позитивних елементів");
// let isPair = positiveArr.filter((el, index, selfArr) => {
//   return selfArr.indexOf(el) !== index;
// });

// let resultIsPair = isPair.filter((item, index) => {
//   return isPair.indexOf(item) === index;
// });
// console.log(`кількість непарних позитивних елементів - ${resultIsPair.length}`);

// console.log("Знайти суму парних позитивних елементів.");
// let isPairSum = 0;
// for (let i = 0; i < resultIsPair.length; i++) {
//   isPairSum += resultIsPair[i];
// }
// console.log(`Сума парних позитивних елементів - ${isPairSum}`);

// console.log("Знайти суму непарних позитивних елементів.");
// let noPairSum = 0;
// for (let i = 0; i < noPair.length; i++) {
//   noPairSum += noPair[i];
// }
// console.log(`Сума непарних позитивних елементів - ${noPairSum}`);

// console.log(`Знайти добуток позитивних елементів.`);
// let multiResult = 1;
// for (let i = 0; i < positiveArr.length; i++) {
//   multiResult = multiResult * positiveArr[i];
// }
// console.log(`Добуток позитивних елементів - ${multiResult}`);

// console.log(
//   `Знайти найбільший серед елементів масиву, iншi елементи обнулити.`
// );
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);
// let zero = [];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] != max) {
//     zero.push(0);
//   } else zero.push(max);
// }
// console.log(zero);
