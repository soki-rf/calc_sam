var parenthesesOpen = true;

function appendCharacter(character) {
  var result = document.getElementById('result');
  result.value += character;
}

function deleteLastCharacter() {
  var result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}

function clearResult() {
  var result = document.getElementById('result');
  result.value = '';
}

function calculateResult() {
  var result = document.getElementById('result');
  var expression = result.value;

  expression = expression.replace(/%/g, '/100');

  try {
    result.value = eval(expression);
  } catch (error) {
    result.value = 'Error';
  }
}

function toggleParentheses() {
  var parenthesesButton = document.getElementById('parentheses');
  if (parenthesesOpen) {
    appendCharacter('(');
    parenthesesOpen = false;
    parenthesesButton.textContent = ')';
  } else {
    appendCharacter(')');
    parenthesesOpen = true;
    parenthesesButton.textContent = '(';
  }
}

function toggleSign() {
  var result = document.getElementById('result');
  var currentValue = parseFloat(result.value);
  result.value = currentValue * -1;
}

function openNewPage() {
    window.location.href = "second.html";
  }
  