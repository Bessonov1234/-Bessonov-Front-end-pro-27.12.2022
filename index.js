const API_URL = "https://jsonplaceholder.typicode.com/comments";
const getEl = (select) => document.querySelector(select);
const creatEL = (select) => document.createElement(select);
const numberId = getEl("#search_id_post");
const validInput = getEl(".text_sub_search");
const buttn = getEl(".button__submit");
const addPost = getEl(".add__post");
const giveComment = creatEL("button");
giveComment.className = "give_comments";
giveComment.innerHTML = "Chekc commen";
addPost.prepend(giveComment);
addPost.style.display = "none";
giveComment.style.display = "none";
function valid() {
  buttn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validInputForNumber()) {
      validInput.style.display = "none";
    } else {
      validInput.style.display = "inline-block";
    }
    function validInputForNumber() {
      if (numberId.value > 500 || numberId.value < 1) {
        validInput.style.display = "inline-block";
      } else {
        return numberId.value ? !isNaN(+numberId.value) : false;
      }
    }
    axios
      .get(API_URL)
      .then((res) => {
        getProduct(res.data);
      })
      .catch((e) => {
        alert(`${e} invalid this object`);
      });

    function getProduct(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id == numberId.value) {
          addPost.style.display = "grid";
          addPost.innerHTML = `
          <div>id: ${array[i].id}
          <div>Name: ${array[i].name}</div></div>
          <div> Email:${array[i].email}</div> 
          `;
          giveComment.style.display = "block";
          addPost.append(giveComment);
        } 
        giveComment.addEventListener("click", (e) => {
          addPost.innerHTML = `
          <div>id: ${array[i].id}
          <div>Name: ${array[i].name}</div></div>
          <div> Email:${array[i].email}</div> 
          <div> Comment:${array[i].body}</div> 
          `;
        });
      }
    }
  });
}

valid();
