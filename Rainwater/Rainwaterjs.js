let beforeNumber = [];
let afterNumber = [];
let testArray = [];
let canHold = 0;
let input1;

function capturingRainwaterArray() {
  let input1 = document.getElementById("input").value;
  if (input1) {
    testArray.push(Number(input1));
    capturingRainwater(testArray);
  }
}
function capturingRainwater(heights) {
  canHold = 0;
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
  ).innerHTML = `Current number list [${testArray.join(
    ", "
  )}] <br> Amount of water that can be held <br> ${canHold}`;
  document.getElementById("input").value = null;
}

function removeLastNumber() {
  testArray.pop();
  canHold = 0;
  capturingRainwater(testArray);
}

function removeAllNumbers() {
  testArray = [];
  canHold = 0;
  document.getElementById(
    "result"
  ).innerHTML = `Current number list (${testArray.join(
    ", "
  )}) <br> Amount of water that can be held <br> ${canHold}`;
}

