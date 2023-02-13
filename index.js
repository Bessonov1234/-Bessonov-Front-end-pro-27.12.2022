// ! 1

function sumArray(arr) {
  let result = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      result.push(arr[i]);
      count++;
    }
  }
  console.log(result);
  return console.log(
    result.reduce((accamulator, team) => accamulator + team) / count
  );
}

let array = ["string", 5, 6, true, undefined, null, {}, 5, [5, 13, 75, 52]];

sumArray(array);

// ! 2
function doMath(
  x = +prompt(" Число №1"),
  znak = prompt(" Що ви хочете зробити з цими числами ? "),
  y = +prompt(" Число №2")
) {
  if (
    isNaN(x) ||
    isNaN(y) ||
    y == null ||
    x == null ||
    y == undefined ||
    x == undefined
  ) {
    return doMath();
  }
  switch (znak) {
    case "-":
      console.log(x - y);
      alert(x - y);
      break;
    case "+":
      console.log(x + y);
      alert(x + y);

      break;

    case "/":
      console.log(x / y);
      alert(x / y);

      break;
    case "%":
      console.log(x % y);
      alert(x % y);

      break;

    case "^":
      console.log(x ** y);
      alert(x ** y);
      break;
    default:
      console.log("default");
      alert("Вибачте ви щось ввели не правильно. Будь-ласка повторіть спробу!");
      return doMath();
  }
}
doMath();

// ! 3

function massFilling (array, arrayTwo, Filling1, Filling2){
  const arr1 = new Array(array);
  const arr2 = new Array(arrayTwo);
  arr1.push(arr2);
  console.log(arr1)
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] == undefined){
      arr1.pop()
    return massFilling ()
  }else{
    arr1.push(Filling1)
  }
  }

  
}


let Fill = prompt('Чим бажаєте заповнити одномірний масиву?');
let Fill2 = prompt('Чим бажаєте заповнити двомірний масиву?');
let LongArr1 = +prompt('Довжина двомірного масиву');
let LongArr2 = +prompt('Довжина одномірного масиву');

massFilling (LongArr1, LongArr2)

// ! 4
function removeSymbols(string, letters) {
  // let stringArray = string.split("");
  const result = [];

  for (let i = 0; i < string.length; i += 1) {
    if (!letters.includes(string[i])) {
      result.push(string[i]);
    }
  }
  let newString = result.join("");
  return newString;
}

let string = prompt("Напишіть текст");
let input = prompt("Які букви хочете видалити");
let arrays = input.split("");
let stringArray = string.split("");
console.log(removeSymbols(string, arrays));
