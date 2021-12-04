// 12/1/2021 Coded by Hannah Dover

let beforeNumber = [];
let afterNumber = [];
let testArray = [];
let canHold = 0;
let input1;
let rainArray = [];
let graph = document.getElementById("chart");
let chartMaxHeight = 300;
let heightMultiplier = 0;
let leftAlignMultiplier = 50;
let tablewrap = document.getElementById("tablewrap");
let fish = document.getElementById("fish");
let fishArray = [];

// function prevent(event) {
//   event.preventDefault();
// }

// Create an array of the numbers the user inputs
function capturingRainwaterArray(event) {
  event.preventDefault();
  let input1 = Math.round(document.getElementById("input").value);
  testArray.push(Number(input1));
  heightMultiplier = chartMaxHeight / Math.max(...testArray);
  capturingRainwater(testArray);
}

function capturingRainwater(heights) {
  canHold = 0;
  let rainArray = [];

  // Calculate the amount of water held by each bar based on what the maximum before and after the bar is.
  // Then the amount of water that it can hold will be the smaller of the two maximums minus the value of the bar.
  for (let i = 0; i < heights.length; i++) {
    beforeNumber = Math.max(...heights.slice(0, i));
    afterNumber = Math.max(...heights.slice(i + 1, heights.length));
    if (!heights.includes(beforeNumber)) {
      canHold = 0;
      rainArray.push(canHold);
    } else if (!heights.includes(afterNumber)) {
      canHold = 0;
      rainArray.push(canHold);
    } else if (beforeNumber < heights[i] || afterNumber < heights[i]) {
      canHold = 0;
      rainArray.push(canHold);
    } else if (beforeNumber > afterNumber) {
      canHold = afterNumber - heights[i];
      rainArray.push(canHold);
    } else {
      canHold = beforeNumber - heights[i];
      rainArray.push(canHold);
    }
  }

  // Sum all of the amounts that can be held
  let totalRain = 0;
  for (let i = 0; i < rainArray.length; i++) {
    totalRain += rainArray[i];
  }

  // Change the HTML to display total amount held and current array
  document.getElementById(
    "result"
  ).innerHTML = `Current number list [${heights.join(
    ", "
  )}] <br> Amount of water that can be held <br> ${totalRain}`;
  document.getElementById("input").value = null;

  // Remove all bars to start with a clean graph
  for (let j = 0; j < testArray.length; j++) {
    let barj = "bar" + j;
    let removeBar = document.getElementById(barj);
    if (removeBar) removeBar.remove();
    let rainj = "rain" + j;
    let removeRain = document.getElementById(rainj);
    if (removeRain) removeRain.remove();
    let fishj = "fish" + j;
    let removeFish = document.getElementById(fishj);
    if (removeFish) removeFish.remove();
  }

  // Create bars
  for (let i = 0; i < testArray.length; i++) {
    let tall = heights[i] * heightMultiplier + "px";
    let bar = "bar" + i;
    let newBar = document.createElement("td");

    graph.append(newBar);
    newBar.setAttribute("id", bar);
    newBar.className = "barStyle";
    newBar.innerHTML = `<div class = 'innerNumber'>${heights[i]}</div>`;

    let barSelect = document.getElementById(bar);
    barSelect.style.height = tall;
    barSelect.style.left = i * leftAlignMultiplier + i + "px";
  }

  // Create water bars
  for (let i = 0; i < rainArray.length; i++) {
    let rain = "rain" + i;

    let newRain = document.createElement("td");

    graph.append(newRain);
    newRain.setAttribute("id", rain);
    newRain.className = "rainStyle";

    let rainSelect = document.getElementById(rain);

    let rainTall = rainArray[i] * heightMultiplier - 1 + "px";

    if (rainArray[i] !== 0) {
      newRain.textContent = rainArray[i];
    }
    rainSelect.style.height = rainTall;
    rainSelect.style.left = i * leftAlignMultiplier + 0.5 + i + "px";
    rainSelect.style.bottom = heights[i] * heightMultiplier + 1 + "px";
  }
  fish.style.opacity = "100%";
  for (let i = 0; i < testArray.length; i++) {
    fishArray.push(i);
  }
  for (let i = 0; i < rainArray.length; i++) {
    let fish = "fish" + i;

    let newFish = document.createElement("td");

    graph.append(newFish);
    newFish.setAttribute("id", fish);
    newFish.className = "fishStyle";

    let fishSelect = document.getElementById(fish);

    fishSelect.style.left = i * leftAlignMultiplier + 0.5 + i + "px";
    fishSelect.style.bottom =
      heights[i] * heightMultiplier +
      rainArray[i] * heightMultiplier +
      1 +
      "px";
  }

  graph.style.width = testArray.length * 50 + 30 + "px";
  tablewrap.style.width = rainArray.length * 50 + "px";
  tablewrap.style.height = Math.max(...rainArray) * heightMultiplier + "px";
  fish.style.animationDuration = testArray.length + "s";
}

// Remove only the last number of the array and update the chart
function removeLastNumber() {
  for (let j = 0; j < testArray.length + 1; j++) {
    let rainj = "rain" + j;
    let removeRain = document.getElementById(rainj);
    if (removeRain) {
      removeRain.remove();
    }
    let barj = "bar" + j;
    let removeBar = document.getElementById(barj);
    if (removeBar) {
      removeBar.remove();
    }
  }
  testArray.splice(-1);
  heightMultiplier = chartMaxHeight / Math.max(...testArray);
  capturingRainwater(testArray);
}

// Remove all of the numbers in the array and clear the chart
function removeAllNumbers() {
  for (let j = 0; j < testArray.length + 1; j++) {
    let rainj = "rain" + j;
    let removeRain = document.getElementById(rainj);
    if (removeRain) {
      removeRain.remove();
    }
    let barj = "bar" + j;
    let removeBar = document.getElementById(barj);
    if (removeBar) {
      removeBar.remove();
    }
  }
  for (let j = 0; j < testArray.length + 1; j++) {}
  testArray = [];
  canHold = 0;
  document.getElementById(
    "result"
  ).innerHTML = `Current number list (${testArray.join(
    ", "
  )}) <br> Amount of water that can be held <br> ${canHold}`;

  fish.style.opacity = "0%";
}
