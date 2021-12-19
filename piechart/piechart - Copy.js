let red = document.getElementById("red");
let orange = document.getElementById("orange");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let purple = document.getElementById("purple");
let pie = document.getElementById("pie");
let radius = 200 / 2;
let colorArray = [
  { color: "red", value: 20 },
  { color: "orange", value: 20 },
  { color: "yellow", value: 20 },
  { color: "green", value: 20 },
  { color: "blue", value: 20 },
];

function changeColor(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    let value = array[i].value;
    let percent = array[i].value;
    total += array[i].value;
  }
  console.log(total);
}
console.log(changeColor(colorArray));
//   let orangeValue = parseFloat(orange.value);
//   let yellowValue = parseFloat(yellow.value);
//   let greenValue = parseFloat(green.value);
//   let blueValue = parseFloat(blue.value);
//   let purpleValue = parseFloat(purple.value);
//   let total =
//     redValue + orangeValue + yellowValue + greenValue + blueValue + purpleValue;

//   let redPercent = (redValue / total) * 100;
//   let orangePercent = (orangeValue / total) * 100;
//   let yellowPercent = (yellowValue / total) * 100;
//   let greenPercent = (greenValue / total) * 100;
//   let bluePercent = (blueValue / total) * 100;
//   let purplePercent = (purpleValue / total) * 100;
//   pie.style.background = `conic-gradient(red 0% ${redPercent}%, orange ${redPercent}% ${
//     redPercent + orangePercent
//   }%, yellow ${redPercent + orangePercent}% ${
//     redPercent + orangePercent + yellowPercent
//   }%, green ${redPercent + orangePercent + yellowPercent}% ${
//     redPercent + orangePercent + yellowPercent + greenPercent
//   }%, blue ${redPercent + orangePercent + yellowPercent + greenPercent}% ${
//     redPercent + orangePercent + yellowPercent + greenPercent + bluePercent
//   }%, purple ${
//     redPercent + orangePercent + yellowPercent + greenPercent + bluePercent
//   }% ${
//     redPercent +
//     orangePercent +
//     yellowPercent +
//     greenPercent +
//     bluePercent +
//     purplePercent
//   }%)`;

//   let redDegrees = (redPercent / 100) * 360;
//   let orangeDegrees = (orangePercent / 100) * 360;
//   let yellowDegrees = (yellowPercent / 100) * 360;
//   let greenDegrees = (greenPercent / 100) * 360;
//   let blueDegrees = (bluePercent / 100) * 360;
//   let purpleDegrees = (purplePercent / 100) * 360;
//   let redLabel = document.getElementById("redLabel");
//   let orangeLabel = document.getElementById("orangeLabel");
//   let yellowLabel = document.getElementById("yellowLabel");
//   let greenLabel = document.getElementById("greenLabel");
//   let blueLabel = document.getElementById("blueLabel");
//   let purpleLabel = document.getElementById("purpleLabel");
//   let unit = document.getElementById("units").value;
//   if (redPercent < 10) {
//     redLabel.style.opacity = "0%";
//   } else if (redPercent == 100) {
//     redLabel.style.opacity = "100%";
//     redLabel.innerHTML = `${redValue}${unit}`;
//     redLabel.style.transform = ` translate(-50%, -50%)`;
//   } else {
//     redLabel.style.opacity = "100%";
//     redLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
//       redDegrees / 2
//     }deg) translateX(110px) rotate(90deg)`;
//     redLabel.innerHTML = `${redValue}${unit}`;
//   }

//   if (orangePercent < 10) {
//     orangeLabel.style.opacity = "0%";
//   } else if (orangePercent == 100) {
//     orangeLabel.style.opacity = "100%";
//     orangeLabel.innerHTML = `${orangeValue}${unit}`;
//     orangeLabel.style.transform = ` translate(-50%, -50%)`;
//   } else {
//     orangeLabel.style.opacity = "100%";
//     orangeLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
//       (redDegrees * 2 + orangeDegrees) / 2
//     }deg) translateX(110px) rotate(90deg)`;
//     orangeLabel.innerHTML = `${orangeValue}${unit}`;
//   }

//   if (yellowPercent < 10) {
//     yellowLabel.style.opacity = "0%";
//   } else if (yellowPercent == 100) {
//     yellowLabel.style.opacity = "100%";
//     yellowLabel.innerHTML = `${yellowValue}${unit}`;
//     yellowLabel.style.transform = ` translate(-50%, -50%)`;
//   } else {
//     yellowLabel.style.opacity = "100%";
//     yellowLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
//       (redDegrees * 2 + orangeDegrees * 2 + yellowDegrees) / 2
//     }deg) translateX(110px) rotate(90deg)`;
//     yellowLabel.innerHTML = `${yellowValue}${unit}`;
//   }

//   if (greenPercent < 10) {
//     greenLabel.style.opacity = "0%";
//   } else if (greenPercent == 100) {
//     greenLabel.style.opacity = "100%";
//     greenLabel.innerHTML = `${greenValue}${unit}`;
//     greenLabel.style.transform = ` translate(-50%, -50%)`;
//   } else {
//     greenLabel.style.opacity = "100%";
//     greenLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
//       (yellowDegrees * 2 + orangeDegrees * 2 + redDegrees * 2 + greenDegrees) /
//       2
//     }deg) translateX(110px) rotate(90deg)`;
//     greenLabel.innerHTML = `${greenValue}${unit}`;
//   }

//   if (bluePercent < 10) {
//     blueLabel.style.opacity = "0%";
//   } else if (bluePercent == 100) {
//     blueLabel.style.opacity = "100%";
//     blueLabel.innerHTML = `${blueValue}${unit}`;
//     blueLabel.style.transform = ` translate(-50%, -50%)`;
//   } else {
//     blueLabel.style.opacity = "100%";
//     blueLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
//       (yellowDegrees * 2 +
//         orangeDegrees * 2 +
//         redDegrees * 2 +
//         greenDegrees * 2 +
//         blueDegrees) /
//       2
//     }deg) translateX(110px) rotate(90deg)`;
//     blueLabel.innerHTML = `${blueValue}${unit}`;
//   }

//   if (purplePercent < 10) {
//     purpleLabel.style.opacity = "0%";
//   } else if (purplePercent == 100) {
//     purpleLabel.style.opacity = "100%";
//     purpleLabel.innerHTML = `${purpleValue}${unit}`;
//     purpleLabel.style.transform = ` translate(-50%, -50%)`;
//   } else {
//     purpleLabel.style.opacity = "100%";
//     purpleLabel.style.transform = ` translate(-50%, -50%) rotate(-90deg) rotateZ(${
//       (yellowDegrees * 2 +
//         orangeDegrees * 2 +
//         redDegrees * 2 +
//         greenDegrees * 2 +
//         blueDegrees * 2 +
//         purpleDegrees) /
//       2
//     }deg) translateX(110px) rotate(90deg)`;
//     purpleLabel.innerHTML = `${purpleValue}${unit}`;
//   }}
