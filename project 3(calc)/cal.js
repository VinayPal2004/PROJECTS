const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let firstValue = null;

function calculate() {
  if (firstValue !== null && operator && currentInput !== "") {
    const secondValue = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
      case "+": result = firstValue + secondValue; break;
      case "-": result = firstValue - secondValue; break; 
      case "*": result = firstValue * secondValue; break;
      case "/": result = secondValue === 0 ? "Error" : firstValue / secondValue; break;
      case "%": result = firstValue % secondValue; break;
    }

    display.textContent = result;
    currentInput = result.toString();
    firstValue = null;
    operator = "";
  }
}

// keyboard input add
document.addEventListener("keydown", (e) => {
  let key = e.key;

  if (!isNaN(key) || key === ".") {
    currentInput += key;
    display.textContent = currentInput;
  } 
  else if (["+", "-", "*", "/", "%"].includes(key)) {
    firstValue = parseFloat(currentInput);
    operator = key;
    currentInput = "";
  } 
  else if (key === "Enter" || key === "=") {
    calculate();
  } 
  else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || "0";
  } 
  else if (key.toLowerCase() === "c") {
    currentInput = "";
    firstValue = null;
    operator = "";
    display.textContent = "0";
  }
});
