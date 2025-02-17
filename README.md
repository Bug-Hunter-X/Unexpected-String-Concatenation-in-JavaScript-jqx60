# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion.  The `+` operator behaves differently when used with numbers and strings. When one operand is a string, it performs string concatenation instead of numerical addition.

## Bug Description
The `foo` function incorrectly concatenates a number and a string due to JavaScript's loose typing. The `bar` function shows the expected numerical addition.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` in your terminal to observe the unexpected concatenation in the `foo` function.
3. Examine `bugSolution.js` for a solution.