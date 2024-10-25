function clearDisplay() {
  document.getElementById('display').value = '';
  document.getElementById('result').value = '';
}

function deleteDigit() {
  let displayElement = document.getElementById('display');
  let currentDisplay = displayElement.value;

  // Remove the last character if display is not empty
  if (currentDisplay.length > 0) {
      displayElement.value = currentDisplay.slice(0, -1);
      calculate(); // Recalculate after deleting a digit
  }
}

function appendToDisplay(value) {
  const display = document.getElementById('display');
  const currentValue = display.value;

  // Check if the last character is an operator
  const operators = ['+', '-', '*', '/'];
  
  // If the last character is an operator and the value is also an operator
  if (operators.includes(currentValue.slice(-1)) && operators.includes(value)) {
      // Replace the last operator with the new one
      display.value = currentValue.slice(1, -1) + value;
  } else {
      // Append the value to the display
      display.value += value;

      // If the value is a number or a closing parenthesis, calculate the result
      if (!operators.includes(value)) {
          calculate();
      }
  }
}

function toggleSign() {
  let currentDisplay = document.getElementById('display').value;
  if (currentDisplay) {
      document.getElementById('display').value = (parseFloat(currentDisplay) * -1).toString();
      calculate(); // Calculate after toggling the sign
  }
}

function calculate() {
  const display = document.getElementById('display');
  let currentValue = display.value;

  // Check for trailing operator and handle missing second operand
  const operators = ['+', '-', '*', '/'];
  if (operators.includes(currentValue.slice(-1))) {
      // Remove the last operator and assume the second operand is 0
      currentValue += '1';
  }

  // Only evaluate if the current value is not empty
  if (currentValue) {
      try {
          let result = eval(currentValue);
          document.getElementById('result').value = result;
      } catch (e) {
          document.getElementById('result').value = 'Error';
      }
  } else {
      document.getElementById('result').value = '';
  }
}

