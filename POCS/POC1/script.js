function add() {
  let f = parseInt(document.getElementsByName("input1")[0].value);
  let s = parseInt(document.getElementsByName("input2")[0].value);
  let result = f + s;
  document.getElementsByName("result")[0].value = result;
}

function subtract() {
  let f = document.getElementsByName("input1")[0].value;
  let s = document.getElementsByName("input2")[0].value;
  let result = f - s;
  document.getElementsByName("result")[0].value = result;
}

function multiply() {
  let f = document.getElementsByName("input1")[0].value;
  let s = document.getElementsByName("input2")[0].value;
  let result = f * s;
  document.getElementsByName("result")[0].value = result;
}

function divide() {
  let f = document.getElementsByName("input1")[0].value;
  let s = document.getElementsByName("input2")[0].value;
  let result = f / s;
  document.getElementsByName("result")[0].value = parseFloat(result).toFixed(2);
}

function clearForm() {
  debugger;
  //display.innerText = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("result").value = "";
}
