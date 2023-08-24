let currentInput = "";

function appendToResult(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function calculateResult() {
  let result;
  const operators = ["+", "-", "*", "/"];
  for (let operator of operators) {
    const operatorIndex = currentInput.indexOf(operator);
    if (operatorIndex !== -1) {
      const num1 = parseFloat(currentInput.slice(0, operatorIndex));
      const num2 = parseFloat(currentInput.slice(operatorIndex + 1));

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            document.getElementById("result").value =
              "Error: División por cero";
            return;
          }
          break;
      }
      break;
    }
  }

  if (result !== undefined) {
    document.getElementById("result").value = result;
    currentInput = result.toString();
  }
}

function limpiarResultado() {
  currentInput = "";
  document.getElementById("result").value = "";
}
