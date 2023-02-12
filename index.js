// ! 1

function sumArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return console.log(
    result.reduce((accamulator, team) => accamulator + team) / 2
  );
}

let array = ["string", 5, 6, true, undefined, null, {}, 5, 13, 75, 52];

sumArray(array);

// ! 2
function doMath(
  x = +prompt(" Число"),
  y = +prompt(" Число"),
  znak = prompt(" Що ви хочете зробити з цими числами ? ")
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
      alert(x - y)
      break;
    case "+":
      console.log(x + y);
      alert(x + y)

      break;

    case "/":
      console.log(x / y);
      alert(x / y)

      break;
    case "%":
      console.log(x % y);
      alert(x % y)

      break;

    case "^":
      console.log(x ** y);
      alert(x ** y)
      break;
    default:
      console.log("default");
      alert("Вибачте ви щось ввели не правильно. Будь-ласка повторіть спробу!");
      return doMath();
  }
}
doMath();

// ! 3 


