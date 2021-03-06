// Write a function that accepts a number (number)
// and returns the value of the Fibonacci number
// in that position in the list
// the Fibonacci numbers follow this pattern:
// Next fibonacci number = previous + one before previous
// fib(0) => 0
// fib(1) => 1
// fib(2) => 1
// fib(3) => 2
// fib(n) => fib(n-1) + fib(n-2)

//Recursive
// function fib(number) {
//     if (number === 0)
//       return 0;
//     else if (number === 1)
//       return 1;
//     else {
//       return fib(number - 1) + fib(number - 2);
//     }
// }

function fib(num) {
  var a = 0, b = 1, c = 0;
  if (num < 2)
    return num;
  else
    for (i=2;i<=num;i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
}

module.exports = fib;
