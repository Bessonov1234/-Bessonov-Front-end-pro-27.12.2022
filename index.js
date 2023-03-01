const text = document.getElementById("text");
const catalog = document.querySelector(".catalog");
const add = document.querySelector("button.add");
const deleteText = document.querySelector(".remove");
const someText = document.querySelector("input");
console.log(add);
const div = document.createElement("div");

function Onclick() {
  let div = document.createElement("div");
  div.className = "after_text";
  let parentDiv = document.querySelector(".catalog");
  div.innerHTML = prompt("enter the text");
  parentDiv.append(div);
  div.addEventListener("click", function onClick() {
    div.classList.add("background");
  });
}
console.log(deleteText);
function remove() {
  let list = document.querySelector(".catalog");
  list.removeChild(list.lastElementChild);
}
