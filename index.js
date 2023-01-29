// ! 9

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  // ? item Видаяляє елемент за індексом
  let result = array.splice(item, 1);
  // console.log(result);
  console.log(array);
}
removeElement(array, 2);

// ! 10

function generateKey(length, characters) {
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * length));
  }
  return result;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);

console.log(key);
