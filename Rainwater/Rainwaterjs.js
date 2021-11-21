let beforeNumber = [];
let afterNumber = [];
let testArray = [];
let canHold = 0;

function capturingRainwater(heights) {
  let input1 = document.getElementById("input").value;
  testArray.push(Number(input1));
  console.log(heights);
  let canHold = 0;
  for (let i = 0; i < heights.length; i++) {
    beforeNumber = Math.max(...heights.slice(0, i));
    afterNumber = Math.max(...heights.slice(i + 1, heights.length));
    if (!heights.includes(beforeNumber)) {
      canHold += 0;
    } else if (!heights.includes(afterNumber)) {
      canHold += 0;
    } else if (beforeNumber < heights[i] || afterNumber < heights[i]) {
      canHold += 0;
    } else if (beforeNumber > afterNumber) {
      canHold += afterNumber - heights[i];
    } else {
      canHold += beforeNumber - heights[i];
    }
  }
  document.getElementById(
    "result"
  ).innerHTML = `Current number list (${testArray.join(
    ", "
  )}) <br> Amount of water that can be held <br> ${canHold}`;
  document.getElementById("input").value = null;
}
function removeLastNumber() {
  testArray.pop();
  document.getElementById(
    "result"
  ).innerHTML = `Current number list (${testArray.join(
    ", "
  )}) <br> Amount of water that can be held <br> ${canHold}`;
}

function removeAllNumbers() {
  testArray = [];
  document.getElementById(
    "result"
  ).innerHTML = `Current number list (${testArray.join(
    ", "
  )}) <br> Amount of water that can be held <br> ${canHold}`;
}
