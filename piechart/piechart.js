let red = document.getElementById("red");
let orange = document.getElementById("orange");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let purple = document.getElementById("purple");
let pie = document.getElementById("pie");
let radius = 200 / 2;
let colorArray = [red, orange, yellow, green, blue, purple];
function changeColor(array) {
  let redValue = parseFloat(red.value);
  let orangeValue = parseFloat(orange.value);
  let yellowValue = parseFloat(yellow.value);
  let greenValue = parseFloat(green.value);
  let blueValue = parseFloat(blue.value);
  let purpleValue = parseFloat(purple.value);
  let total =
    redValue + orangeValue + yellowValue + greenValue + blueValue + purpleValue;

  let redPercent = (redValue / total) * 100;
  let orangePercent = (orangeValue / total) * 100;
  let yellowPercent = (yellowValue / total) * 100;
  let greenPercent = (greenValue / total) * 100;
  let bluePercent = (blueValue / total) * 100;
  let purplePercent = (purpleValue / total) * 100;
  pie.style.background = `conic-gradient(red 0% ${redPercent}%, orange ${redPercent}% ${
    redPercent + orangePercent
  }%, yellow ${redPercent + orangePercent}% ${
    redPercent + orangePercent + yellowPercent
  }%, green ${redPercent + orangePercent + yellowPercent}% ${
    redPercent + orangePercent + yellowPercent + greenPercent
  }%, blue ${redPercent + orangePercent + yellowPercent + greenPercent}% ${
    redPercent + orangePercent + yellowPercent + greenPercent + bluePercent
  }%, purple ${
    redPercent + orangePercent + yellowPercent + greenPercent + bluePercent
  }% ${
    redPercent +
    orangePercent +
    yellowPercent +
    greenPercent +
    bluePercent +
    purplePercent
  }%)`;

  let redDegrees = (redPercent / 100) * 360;
  let orangeDegrees = (orangePercent / 100) * 360;
  let yellowDegrees = (yellowPercent / 100) * 360;
  let greenDegrees = (greenPercent / 100) * 360;
  let blueDegrees = (bluePercent / 100) * 360;
  let purpleDegrees = (purplePercent / 100) * 360;
  let redLabel = document.getElementById("redLabel");
  let orangeLabel = document.getElementById("orangeLabel");
  let yellowLabel = document.getElementById("yellowLabel");
  let greenLabel = document.getElementById("greenLabel");
  let blueLabel = document.getElementById("blueLabel");
  let purpleLabel = document.getElementById("purpleLabel");
  let unit = document.getElementById("units").value;
  if (redPercent < 8) {
    redLabel.style.opacity = "0%";
  } else if (redPercent == 100) {
    redLabel.style.opacity = "100%";
    redLabel.innerHTML = `<strong>${redValue}</strong><span class="small">${unit}</span>`;
    redLabel.style.transform = ` translate(-50%, -50%)`;
  } else {
    redLabel.style.opacity = "100%";
    redLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
      redDegrees / 2
    }deg) translateX(110px) rotate(90deg)`;
    redLabel.innerHTML = `<strong>${redValue}</strong><span class="small">${unit}</span>`;
  }

  if (orangePercent < 8) {
    orangeLabel.style.opacity = "0%";
  } else if (orangePercent == 100) {
    orangeLabel.style.opacity = "100%";
    orangeLabel.innerHTML = `<strong>${orangeValue}</strong><span class="small">${unit}</span>`;
    orangeLabel.style.transform = ` translate(-50%, -50%)`;
  } else {
    orangeLabel.style.opacity = "100%";
    orangeLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
      (redDegrees * 2 + orangeDegrees) / 2
    }deg) translateX(110px) rotate(90deg)`;
    orangeLabel.innerHTML = `<strong>${orangeValue}</strong><span class="small">${unit}</span>`;
  }

  if (yellowPercent < 8) {
    yellowLabel.style.opacity = "0%";
  } else if (yellowPercent == 100) {
    yellowLabel.style.opacity = "100%";
    yellowLabel.innerHTML = `<strong>${yellowValue}</strong><span class="small">${unit}</span>`;
    yellowLabel.style.transform = ` translate(-50%, -50%)`;
  } else {
    yellowLabel.style.opacity = "100%";
    yellowLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
      (redDegrees * 2 + orangeDegrees * 2 + yellowDegrees) / 2
    }deg) translateX(110px) rotate(90deg)`;
    yellowLabel.innerHTML = `<strong>${yellowValue}</strong><span class="small">${unit}</span>`;
  }

  if (greenPercent < 8) {
    greenLabel.style.opacity = "0%";
  } else if (greenPercent == 100) {
    greenLabel.style.opacity = "100%";
    greenLabel.innerHTML = `<strong>${greenValue}</strong><span class="small">${unit}</span>`;
    greenLabel.style.transform = ` translate(-50%, -50%)`;
  } else {
    greenLabel.style.opacity = "100%";
    greenLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
      (yellowDegrees * 2 + orangeDegrees * 2 + redDegrees * 2 + greenDegrees) /
      2
    }deg) translateX(110px) rotate(90deg)`;
    greenLabel.innerHTML = `<strong>${greenValue}</strong><span class="small">${unit}</span>`;
  }

  if (bluePercent < 8) {
    blueLabel.style.opacity = "0%";
  } else if (bluePercent == 100) {
    blueLabel.style.opacity = "100%";
    blueLabel.innerHTML = `<strong>${blueValue}</strong><span class="small">${unit}</span>`;
    blueLabel.style.transform = ` translate(-50%, -50%)`;
  } else {
    blueLabel.style.opacity = "100%";
    blueLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
      (yellowDegrees * 2 +
        orangeDegrees * 2 +
        redDegrees * 2 +
        greenDegrees * 2 +
        blueDegrees) /
      2
    }deg) translateX(110px) rotate(90deg)`;
    blueLabel.innerHTML = `<strong>${blueValue}</strong><span class="small">${unit}</span>`;
  }

  if (purplePercent < 8) {
    purpleLabel.style.opacity = "0%";
  } else if (purplePercent == 100) {
    purpleLabel.style.opacity = "100%";
    purpleLabel.innerHTML = `<strong>${purpleValue}</strong><span class="small">${unit}</span>`;
    purpleLabel.style.transform = ` translate(-50%, -50%)`;
  } else {
    purpleLabel.style.opacity = "100%";
    purpleLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
      (yellowDegrees * 2 +
        orangeDegrees * 2 +
        redDegrees * 2 +
        greenDegrees * 2 +
        blueDegrees * 2 +
        purpleDegrees) /
      2
    }deg) translateX(110px) rotate(90deg)`;
    purpleLabel.innerHTML = `<strong>${purpleValue}</strong><span class="small">${unit}</span>`;
  }
}
