function slideOut() {
  let panel = document.getElementById("contact");
  panel.classList.remove("contact");
  panel.classList.add("contactOut");
  let buttonHide = document.getElementById("contactBtn");
  buttonHide.classList.remove("contactBtn");
  buttonHide.classList.add("contactBtnHide");
}
function slideIn() {
  let panel = document.getElementById("contact");
  panel.classList.remove("contactOut");
  panel.classList.add("contact");
  let buttonHide = document.getElementById("contactBtn");
  buttonHide.classList.remove("contactBtnHide");
  buttonHide.classList.add("contactBtn");
}
