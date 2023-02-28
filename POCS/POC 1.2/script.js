show = (input) => {
  document.getElementById("answer").value += input;
};

ac = () => {
  document.getElementById("answer").value = " ";
};

function cal() {
  let output = eval(document.getElementById("answer").value);
  document.getElementById("answer").value = output;
}
