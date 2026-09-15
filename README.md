# Minimal Calculator

A clean, responsive calculator built with vanilla HTML, CSS, and JavaScript. It supports mouse, touch, and keyboard input for everyday arithmetic in a small, focused interface.

## Live demo

[Open the calculator](https://akifomar.github.io/minimal-calculator/)

## Features

- Addition, subtraction, multiplication, and division
- Decimal and percentage calculations
- Clear and backspace controls
- Keyboard support for faster input
- Division-by-zero protection with an `Error` state
- Responsive layout for smaller screens
- No frameworks, dependencies, or build step

## Technologies

- HTML5 for the calculator structure and accessible controls
- CSS3 for layout, colour, spacing, and responsive styling
- Vanilla JavaScript for state management and calculations
- GitHub Pages for deployment

## Usage

1. Open the [live demo](https://akifomar.github.io/minimal-calculator/), or open `index.html` locally in a browser.
2. Use the on-screen buttons or your keyboard to enter a calculation.
3. Press `Enter` or `=` to calculate, `Escape` to clear, and `Backspace` to delete the last digit.

## Keyboard controls

| Key | Action |
| --- | --- |
| `0`–`9` | Enter a number |
| `.` | Add a decimal point |
| `+` `-` `*` `/` | Choose an operator |
| `Enter` or `=` | Calculate the result |
| `Escape` | Clear the calculator |
| `Backspace` | Delete the last digit |
| `%` | Convert the current value to a percentage |

## Project structure

```text
minimal-calculator/
├── index.html   # Calculator markup and accessible controls
├── styles.css   # Layout, visual design, and responsive rules
├── script.js    # Calculator state and interaction logic
└── README.md    # Project documentation
```

## How it works

The calculator keeps the current display value, stored operand, and selected operator in JavaScript state. Button clicks and keyboard events use the same calculation functions, so both input methods behave consistently.

## Author

Built by [Akif](https://github.com/akifomar), a student exploring AI and web development through practical projects.
