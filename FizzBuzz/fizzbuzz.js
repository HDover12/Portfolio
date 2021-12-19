let input1;

function fizzbuzz(input1) {
  let numbers = [];
  input1 = document.getElementById("input").value;
  Number(input1);
  Math.floor(input1);
  if (isNaN(input1) || input1 <= 0 || input1 > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    for (let i = 0; i < input1; i++) {
      numbers.push(i + 1);
      let new3Number = numbers[i] / 3;
      let new5Number = numbers[i] / 5;
      if (Number.isInteger(new3Number) && Number.isInteger(new5Number)) {
        numbers[i] = "FizzBuzz";
      } else if (Number.isInteger(new5Number)) {
        numbers[i] = "Buzz";
      } else if (Number.isInteger(new3Number)) {
        numbers[i] = "Fizz";
      }
    }
  }
  document.getElementById("result").innerHTML = `[${numbers.join(",  ")}]`;
  document.getElementById("input").value = null;
}

function removeAllNumbers() {
  numbers = [];
  document.getElementById("result").innerHTML = `${numbers.join(",  ")}`;
}
