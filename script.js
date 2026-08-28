const display = document.getElementById("display");

let current = "0";
let stored = null;
let operator = null;
let fresh = false;

function format(value) {
  if (!Number.isFinite(value)) return "Error";
  const text = String(value);
  if (text.length > 12) {
    return value.toPrecision(8).replace(/\.?0+$/, "");
  }
  return text;
}

function update() {
  display.textContent = current;
}

function inputDigit(digit) {
  if (fresh || current === "0") {
    current = digit;
    fresh = false;
  } else if (current.length < 14) {
    current += digit;
  }
  update();
}

function inputDecimal() {
  if (fresh) {
    current = "0.";
    fresh = false;
  } else if (!current.includes(".")) {
    current += ".";
  }
  update();
}

function compute(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? NaN : a / b;
    default:
      return b;
  }
}

function setOperator(next) {
  const value = parseFloat(current);
  if (stored !== null && operator && !fresh) {
    stored = compute(stored, value, operator);
    current = format(stored);
  } else {
    stored = value;
  }
  operator = next;
  fresh = true;
  update();
}

function equals() {
  if (operator === null || stored === null) return;
  const value = parseFloat(current);
  stored = compute(stored, value, operator);
  current = format(stored);
  operator = null;
  stored = null;
  fresh = true;
  update();
}

function clearAll() {
  current = "0";
  stored = null;
  operator = null;
  fresh = false;
  update();
}

function deleteLast() {
  if (fresh) return;
  current = current.length <= 1 ? "0" : current.slice(0, -1);
  update();
}

function percent() {
  current = format(parseFloat(current) / 100);
  fresh = true;
  update();
}

document.querySelector(".keys").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const { action, value } = button.dataset;
  if (action === "digit") inputDigit(value);
  if (action === "decimal") inputDecimal();
  if (action === "operator") setOperator(value);
  if (action === "equals") equals();
  if (action === "clear") clearAll();
  if (action === "delete") deleteLast();
  if (action === "percent") percent();
});

document.addEventListener("keydown", (event) => {
  const { key } = event;
  if (/^[0-9]$/.test(key)) {
    inputDigit(key);
    return;
  }
  if (key === ".") {
    inputDecimal();
    return;
  }
  if (["+", "-", "*", "/"].includes(key)) {
    setOperator(key);
    return;
  }
  if (key === "Enter" || key === "=") {
    event.preventDefault();
    equals();
    return;
  }
  if (key === "Escape") {
    clearAll();
    return;
  }
  if (key === "Backspace") {
    deleteLast();
    return;
  }
  if (key === "%") {
    percent();
  }
});

update();
