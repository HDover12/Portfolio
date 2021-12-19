function slideOut() {
  let buttonHide = document.getElementById("contactBtn");
  buttonHide.setAttribute("id", "contactBtnHide");
  let panel = document.getElementById("contact");
  panel.setAttribute("id", "contactOut");
}
function slideIn() {
  let panel = document.getElementById("contactOut");
  panel.setAttribute("id", "contact");
  let button = document.getElementById("contactBtnHide");
  button.setAttribute("id", "contactBtn");
}

let navBar = document.getElementById("navBar");
document.addEventListener("scroll", () => {
  navBar.style.opacity = "80%";
});
