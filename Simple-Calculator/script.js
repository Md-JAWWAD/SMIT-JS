var inputBox = document.getElementById("calculation-box");

function displayVal(val) {
  inputBox.value += val;
  console.log(val);
}

function displayResult() {
  var resultBox = eval(inputBox.value);
  inputBox.value = resultBox;
  console.log(resultBox);
}

function displayNew() {
  inputBox.value = "";
}

function displayCut() {
  inputBox.value = inputBox.value.slice(0, inputBox.value.length - 1);
  console.log(inputBox.value);
}
