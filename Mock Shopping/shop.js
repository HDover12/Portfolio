let productArea = document.getElementById("productArea");

// Product display constructor
class Item {
  constructor(image, color, category, price, productId, description) {
    this.image = image;
    this.color = color;
    this.category = category;
    this.price = price;
    this.productId = productId;
    this.description = description;
  }
}

let product1 = new Item(
  "pics/Product1.jpg",
  "tan",
  "Jackets",
  70,
  1,
  "Tan wool coat"
);
let product2 = new Item(
  "pics/Product2.jpg",
  "blue",
  "Dresses",
  50,
  2,
  "Blue flowy dress"
);
let product3 = new Item(
  "pics/Product3.jpg",
  "tan",
  "Dresses",
  40,
  3,
  "Striped tan dress"
);
let product4 = new Item(
  "pics/Product4.jpg",
  "orange",
  "Dresses",
  60,
  4,
  "Burnt orange dress"
);
let product5 = new Item(
  "pics/Product5.jpg",
  "orange",
  "Bottoms",
  25,
  5,
  "Orange skirt"
);
let product6 = new Item(
  "pics/Product6.jpg",
  "white",
  "Bottoms",
  45,
  6,
  "White and gray flowy skirt"
);
let product7 = new Item(
  "pics/Product7.jpg",
  "red",
  "Dresses",
  37,
  7,
  "Pink 2-piece"
);
let product8 = new Item(
  "pics/Product8.jpg",
  "black",
  "Dresses",
  38,
  8,
  "Black casual dress"
);
let product9 = new Item(
  "pics/Product9.jpg",
  "black",
  "Jackets",
  35,
  9,
  "Black suit jacket"
);
let product10 = new Item(
  "pics/Product10.jpg",
  "red",
  "Jackets",
  45,
  10,
  "Red jacket"
);
let productArray = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];

let body = document.querySelector("body");
let displayArray = [];

// Initial display all on load
function display() {
  removeAll();
  displayArray = [];
  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i].image;
    let productCard = document.createElement("div");
    productCard.className = "productCard";
    productArea.prepend(productCard);
    let tooltip = "Product" + productArray[i].productId;
    productCard.innerHTML = `<div title = '${tooltip}' class = 'productPic' style = "background-image: url('${product}');"></div>
      <div class ='description'><div>${productArray[i].description}</div><div>Price: $${productArray[i].price}</div></div>`;
  }
}
display();
let showAll = document.getElementById("showAll");
showAll.addEventListener("click", display);

// Removal all card function
function removeAll() {
  let removeItems = document.querySelectorAll(".productCard");
  for (let i = 0; i < removeItems.length; i++) {
    removeItems[i].remove();
  }
}

// Filter by what is clicked on in the navigation list
let navlist = document.getElementById("navlist");
navlist.addEventListener("click", (e) => {
  if (e.target.className === "navItem") {
    removeAll();
    displayArray = [];
    for (let i = 0; i < productArray.length; i++) {
      let target = e.target.textContent;
      if (productArray[i].category === target) {
        displayArray.push(productArray[i]);
      }
    }
    buildCards();
  }
});
function buildCards() {
  for (let i = 0; i < displayArray.length; i++) {
    let product = displayArray[i].image;
    let productCard = document.createElement("div");
    productCard.className = "productCard";
    productArea.prepend(productCard);
    let tooltip = "Product" + displayArray[i].productId;
    productCard.innerHTML = `<div title = '${tooltip}' class = 'productPic' style = "background-image: url('${product}');"></div>
      <div class ='description'><div>${productArray[i].description}</div><div>Price: $${productArray[i].price}</div></div>`;
  }
}

// Sort displayed items high to low
let sortHigh = document.getElementById("sortHigh");
function sortCardsHigh() {
  if (displayArray.length) {
    displayArray.sort((a, b) => {
      return a.price - b.price;
    });
    removeAll();
    buildCards();
  } else {
    productArray.sort((a, b) => {
      return a.price - b.price;
    });
    display();
  }
}
sortHigh.addEventListener("click", sortCardsHigh);

// Sort displayed items low to high
let sortLow = document.getElementById("sortLow");
function sortCardsLow() {
  if (displayArray.length) {
    displayArray.sort((a, b) => {
      return b.price - a.price;
    });
    removeAll();
    buildCards();
  } else {
    productArray.sort((a, b) => {
      return b.price - a.price;
    });
    display();
  }
}
sortLow.addEventListener("click", sortCardsLow);

// Zoom in on hover
let picArea = document.getElementById("productArea");

picArea.addEventListener("mouseover", function (e) {
  let event = e.target;
  let bigPic = event.style.backgroundImage;
  let targetTitle = event.title;
  let pic2 = `url(pics/${targetTitle}a.jpg)`;
  let pic3 = `url(pics/${targetTitle}b.jpg)`;
  if (event.className === "productPic") {
    let zoomPicWrapper = document.createElement("div");
    zoomPicWrapper.className = "zoomPicWrapper";
    zoomPicWrapper.innerHTML = `<button id="leftBtn" class="buttons">&#8810;</button><button class='buttons' id="rightBtn">&#8811;</button>`;
    let zoomPic = document.createElement("div");
    zoomPic.className = "picZoom";
    zoomPic.style.backgroundImage = `${bigPic}, ${pic2}, ${pic3}`;
    zoomPic.setAttribute("title", `${event.title}`);
    event.insertAdjacentElement("beforebegin", zoomPicWrapper);
    zoomPicWrapper.appendChild(zoomPic);
    let leftBtn = document.getElementById("leftBtn");
    let rightBtn = document.getElementById("rightBtn");
    let inc = 0;
    rightBtn.addEventListener("click", () => {
      if (inc < 68 && inc >= 0) {
        inc += 34;
        zoomPic.style.transform = `translateX(-${inc}%)`;
      }
    });
    leftBtn.addEventListener("click", () => {
      if (inc <= 68 && inc > 0) {
        inc -= 34;
        zoomPic.style.transform = `translateX(-${inc}%)`;
      }
    });
    document
      .querySelector(".zoomPicWrapper")
      .addEventListener("mouseleave", () => {
        let removeZoomDivs = document.querySelectorAll(".zoomPicWrapper");
        for (let i = 0; i < removeZoomDivs.length; i++) {
          removeZoomDivs[i].remove();
        }
      });
  }
});
