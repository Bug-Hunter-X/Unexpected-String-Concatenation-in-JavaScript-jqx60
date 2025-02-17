function foo(a, b) {
  // Explicit type checking and conversion
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return 'Invalid input types';
  }
}

console.log(foo(2, '3')); // Output: Invalid input types

console.log(foo(2, 3)); // Output: 5