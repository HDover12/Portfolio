let ul = document.getElementById("list");
let text = document.getElementById("text");
let listArray = [];

function addToList(input) {
  listArray.push(input);

  console.log(listArray);

  let listItem = document.createElement("div");
  let id = `${input}${listArray.length}`;
  console.log(id);
  listItem.setAttribute("id", id);
  listItem.classList.add("listItem");
  listItem.innerHTML = `<div class='divItems'>${
    listArray[listArray.length - 1]
  }..........................<button title='Remove Item' class='listButtons' onclick="remove(${id})"></button></div>`;
  ul.appendChild(listItem);

  text.value = "";
}

function removeAll() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  listArray = [];
}

function remove(id) {
  ul.removeChild(id);
}
