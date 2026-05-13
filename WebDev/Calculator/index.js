// Calculator State
let currentInput = '';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;
let justCalculated = false;

// DOM Elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

// Update the display
function updateDisplay(value) {
  display.value = value || '';
  display.placeholder = value ? '' : '0';
}

// Format number for display (add commas, handle decimals)
function formatNumber(num) {
  if (num === '' || num === '-') return num;
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

// Parse display value (remove commas)
function parseDisplay(val) {
  return val.replace(/,/g, '');
}

// Handle number input
function inputNumber(num) {
  if (justCalculated && num !== '.') {
    currentInput = '';
    justCalculated = false;
  }
  if (shouldResetDisplay) {
    currentInput = '';
    shouldResetDisplay = false;
  }
  if (num === '.' && currentInput.includes('.')) return;
  if (num === '.' && currentInput === '') currentInput = '0';
  if (currentInput === '0' && num !== '.') currentInput = '';
  currentInput += num;
  updateDisplay(formatNumber(currentInput));
}

// Handle double zero
function inputDoubleZero() {
  if (currentInput === '' || currentInput === '0') return;
  inputNumber('00');
}

// Handle operator
function inputOperator(op) {
  justCalculated = false;
  if (currentInput === '' && previousInput === '') return;

  if (currentInput !== '' && previousInput !== '' && operator) {
    calculate();
  }

  if (currentInput !== '') {
    previousInput = parseDisplay(currentInput);
  }
  operator = op;
  shouldResetDisplay = true;
}

// Calculate result
function calculate() {
  if (operator === null || previousInput === '') return;
  if (currentInput === '' && shouldResetDisplay) return;

  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput !== '' ? parseDisplay(currentInput) : previousInput);

  let result;
  switch (operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/':
      if (curr === 0) {
        flashDisplay('Error');
        reset();
        return;
      }
      result = prev / curr;
      break;
    default: return;
  }

  // Round floating point errors
  result = Math.round(result * 1e10) / 1e10;

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  shouldResetDisplay = false;
  justCalculated = true;
  updateDisplay(formatNumber(currentInput));
  animateResult();
}

// Handle percentage
function inputPercent() {
  if (currentInput === '') return;
  const val = parseFloat(parseDisplay(currentInput));
  if (previousInput !== '' && operator) {
    currentInput = ((parseFloat(previousInput) * val) / 100).toString();
  } else {
    currentInput = (val / 100).toString();
  }
  updateDisplay(formatNumber(currentInput));
  justCalculated = true;
}

// Delete last character
function deleteLast() {
  if (justCalculated) { reset(); return; }
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(formatNumber(currentInput));
  }
}

// Reset / AC
function reset() {
  currentInput = '';
  previousInput = '';
  operator = null;
  shouldResetDisplay = false;
  justCalculated = false;
  updateDisplay('');
}

// Visual feedback
function flashDisplay(msg) {
  display.value = msg;
  display.style.color = '#ff6b6b';
  setTimeout(() => { display.style.color = ''; }, 600);
}

function animateResult() {
  display.style.transform = 'scale(1.04)';
  display.style.transition = 'transform 0.12s cubic-bezier(.34,1.56,.64,1)';
  setTimeout(() => {
    display.style.transform = 'scale(1)';
  }, 140);
}

function ripple(btn) {
  btn.classList.add('pressed');
  setTimeout(() => btn.classList.remove('pressed'), 180);
}

// Button click handler
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    ripple(btn);
    const text = btn.textContent.trim();

    switch (text) {
      case 'AC': reset(); break;
      case '%': inputPercent(); break;
      case 'Del': deleteLast(); break;
      case '÷': inputOperator('/'); break;
      case '×': inputOperator('*'); break;
      case '−': inputOperator('-'); break;
      case '+': inputOperator('+'); break;
      case '=': calculate(); break;
      case '.': inputNumber('.'); break;
      case '00': inputDoubleZero(); break;
      default:
        if (!isNaN(text)) inputNumber(text);
    }
  });
});

// Keyboard support
document.addEventListener('keydown', e => {
  const key = e.key;
  if (key >= '0' && key <= '9') inputNumber(key);
  else if (key === '.') inputNumber('.');
  else if (key === '+') inputOperator('+');
  else if (key === '-') inputOperator('-');
  else if (key === '*') inputOperator('*');
  else if (key === '/') { e.preventDefault(); inputOperator('/'); }
  else if (key === 'Enter' || key === '=') calculate();
  else if (key === 'Backspace') deleteLast();
  else if (key === 'Escape') reset();
  else if (key === '%') inputPercent();

  // Highlight matching button
  buttons.forEach(btn => {
    const t = btn.textContent.trim();
    if (
      (key === t) ||
      (key === 'Enter' && t === '=') ||
      (key === 'Escape' && t === 'AC') ||
      (key === 'Backspace' && t === 'Del') ||
      (key === '*' && t === '×') ||
      (key === '/' && t === '÷') ||
      (key === '-' && t === '−')
    ) {
      ripple(btn);
    }
  });
});